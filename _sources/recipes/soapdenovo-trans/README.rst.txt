:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'soapdenovo-trans'
.. highlight: bash

soapdenovo-trans
================

.. conda:recipe:: soapdenovo-trans
   :replaces_section_title:
   :noindex:

   SOAPdenovo\-Trans is a de novo transcriptome assembler basing on the SOAPdenovo framework\, adapt to alternative splicing and different expression level among transcripts.

   :homepage: https://github.com/aquaskyline/SOAPdenovo-Trans
   :documentation: https://github.com/aquaskyline/SOAPdenovo-Trans/blob/1.0.5/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`soapdenovo-trans <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/soapdenovo-trans>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/soapdenovo-trans/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btu077`

   


.. conda:package:: soapdenovo-trans

   |downloads_soapdenovo-trans| |docker_soapdenovo-trans|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.04-7</code>,  <code>1.04-6</code>,  <code>1.04-5</code>,  <code>1.04-4</code>,  <code>1.04-3</code>,  <code>1.04-2</code>,  <code>1.04-1</code>,  <code>1.04-0</code>,  <code>1.03-3</code>,  </span></summary>
      

      ``1.04-7``,  ``1.04-6``,  ``1.04-5``,  ``1.04-4``,  ``1.04-3``,  ``1.04-2``,  ``1.04-1``,  ``1.04-0``,  ``1.03-3``,  ``1.03-2``,  ``1.03-1``,  ``1.03-0``,  ``1.0.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on samtools: ``>=0.1.19,<1.0a0``
   :depends on zlib: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install soapdenovo-trans

to add into an existing workspace instead, run::

    pixi add soapdenovo-trans

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install soapdenovo-trans

Alternatively, to install into a new environment, run::

    conda create -n envname soapdenovo-trans

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/soapdenovo-trans:<tag>

(see `soapdenovo-trans/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_soapdenovo-trans| image:: https://img.shields.io/conda/dn/bioconda/soapdenovo-trans.svg?style=flat
   :target: https://anaconda.org/bioconda/soapdenovo-trans
   :alt:   (downloads)
.. |docker_soapdenovo-trans| image:: https://quay.io/repository/biocontainers/soapdenovo-trans/status
   :target: https://quay.io/repository/biocontainers/soapdenovo-trans
.. _`soapdenovo-trans/tags`: https://quay.io/repository/biocontainers/soapdenovo-trans?tab=tags


.. raw:: html

    <script>
        var package = "soapdenovo-trans";
        var versions = ["1.04","1.04","1.04","1.04","1.04"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/soapdenovo-trans/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/soapdenovo-trans/README.html