:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mira'
.. highlight: bash

mira
====

.. conda:recipe:: mira
   :replaces_section_title:
   :noindex:

   MIRA is a whole genome shotgun and EST sequence assembler for Sanger\, 454\, Solexa \(Illumina\)\, IonTorrent data and PacBio \(the later at the moment only CCS and error\-corrected CLR reads\).

   :homepage: https://github.com/DrMicrobit/mira
   :documentation: https://mira-assembler.sourceforge.net/docs/DefinitiveGuideToMIRA.html
   
   :license: GPL / GPL-2.0-or-later
   :recipe: /`mira <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mira>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mira/meta.yaml>`_
   :links: biotools: :biotools:`mira`, usegalaxy-eu: :usegalaxy-eu:`mira_assembler`, doi: :doi:`10.1101/gr.1917404`

   


.. conda:package:: mira

   |downloads_mira| |docker_mira|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.0.0rc2-0</code>,  <code>4.9.6-1</code>,  <code>4.9.6-0</code>,  <code>4.9.5-1</code>,  <code>4.9.5-0</code>,  <code>4.0.2-3</code>,  <code>4.0.2-2</code>,  <code>4.0.2-1</code>,  <code>3.4.1.1-1</code>,  </span></summary>
      

      ``5.0.0rc2-0``,  ``4.9.6-1``,  ``4.9.6-0``,  ``4.9.5-1``,  ``4.9.5-0``,  ``4.0.2-3``,  ``4.0.2-2``,  ``4.0.2-1``,  ``3.4.1.1-1``,  ``3.4.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on boost-cpp: 
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on expat: 
   :depends on libexpat: ``>=2.7.1,<3.0a0``
   :depends on libgcc: ``>=13``
   :depends on libgomp: 
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

    pixi global install mira

to add into an existing workspace instead, run::

    pixi add mira

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mira

Alternatively, to install into a new environment, run::

    conda create -n envname mira

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mira:<tag>

(see `mira/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mira| image:: https://img.shields.io/conda/dn/bioconda/mira.svg?style=flat
   :target: https://anaconda.org/bioconda/mira
   :alt:   (downloads)
.. |docker_mira| image:: https://quay.io/repository/biocontainers/mira/status
   :target: https://quay.io/repository/biocontainers/mira
.. _`mira/tags`: https://quay.io/repository/biocontainers/mira?tab=tags


.. raw:: html

    <script>
        var package = "mira";
        var versions = ["5.0.0rc2","4.9.6","4.9.6","4.9.5","4.9.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mira/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mira/README.html