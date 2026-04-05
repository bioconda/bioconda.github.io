:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gffread'
.. highlight: bash

gffread
=======

.. conda:recipe:: gffread
   :replaces_section_title:
   :noindex:

   GFF\/GTF utility providing format conversions\, region filtering\, FASTA sequence extraction and more.

   :homepage: https://ccb.jhu.edu/software/stringtie/gff.shtml
   :documentation: https://ccb.jhu.edu/software/stringtie/gff.shtml#gffread
   
   :developer docs: https://github.com/gpertea/gffread
   :license: MIT / MIT
   :recipe: /`gffread <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gffread>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gffread/meta.yaml>`_
   :links: biotools: :biotools:`gffread`, usegalaxy-eu: :usegalaxy-eu:`gffread`, doi: :doi:`10.12688/f1000research.23297.2`

   


.. conda:package:: gffread

   |downloads_gffread| |docker_gffread|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.12.7-6</code>,  <code>0.12.7-5</code>,  <code>0.12.7-4</code>,  <code>0.12.7-3</code>,  <code>0.12.7-2</code>,  <code>0.12.7-1</code>,  <code>0.12.7-0</code>,  <code>0.12.1-1</code>,  <code>0.12.1-0</code>,  </span></summary>
      

      ``0.12.7-6``,  ``0.12.7-5``,  ``0.12.7-4``,  ``0.12.7-3``,  ``0.12.7-2``,  ``0.12.7-1``,  ``0.12.7-0``,  ``0.12.1-1``,  ``0.12.1-0``,  ``0.11.7-0``,  ``0.11.6-0``,  ``0.11.4-0``,  ``0.9.12-0``,  ``0.9.9-1``,  ``0.9.9-0``,  ``0.9.8-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install gffread

to add into an existing workspace instead, run::

    pixi add gffread

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gffread

Alternatively, to install into a new environment, run::

    conda create -n envname gffread

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gffread:<tag>

(see `gffread/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gffread| image:: https://img.shields.io/conda/dn/bioconda/gffread.svg?style=flat
   :target: https://anaconda.org/bioconda/gffread
   :alt:   (downloads)
.. |docker_gffread| image:: https://quay.io/repository/biocontainers/gffread/status
   :target: https://quay.io/repository/biocontainers/gffread
.. _`gffread/tags`: https://quay.io/repository/biocontainers/gffread?tab=tags


.. raw:: html

    <script>
        var package = "gffread";
        var versions = ["0.12.7","0.12.7","0.12.7","0.12.7","0.12.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gffread/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gffread/README.html