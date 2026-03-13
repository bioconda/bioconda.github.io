:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sniffles'
.. highlight: bash

sniffles
========

.. conda:recipe:: sniffles
   :replaces_section_title:
   :noindex:

   Sniffles is a structural variation caller using third generation sequencing \(PacBio or Oxford Nanopore\).

   :homepage: https://github.com/fritzsedlazeck/Sniffles
   :documentation: https://github.com/fritzsedlazeck/Sniffles/wiki
   
   :license: MIT / MIT
   :recipe: /`sniffles <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sniffles>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sniffles/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41587-023-02024-y`, doi: :doi:`10.1038/s41592-018-0001-7`, biotools: :biotools:`sniffles`, usegalaxy-eu: :usegalaxy-eu:`sniffles`

   


.. conda:package:: sniffles

   |downloads_sniffles| |docker_sniffles|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.7.3-0</code>,  <code>2.7.2-0</code>,  <code>2.7.1-0</code>,  <code>2.7.0-0</code>,  <code>2.6.3-0</code>,  <code>2.6.2-0</code>,  <code>2.6.1-0</code>,  <code>2.6.0-0</code>,  <code>2.5.3-0</code>,  </span></summary>
      

      ``2.7.3-0``,  ``2.7.2-0``,  ``2.7.1-0``,  ``2.7.0-0``,  ``2.6.3-0``,  ``2.6.2-0``,  ``2.6.1-0``,  ``2.6.0-0``,  ``2.5.3-0``,  ``2.5.2-0``,  ``2.4-0``,  ``2.3.3-0``,  ``2.3.2-1``,  ``2.3.2-0``,  ``2.2-0``,  ``2.0.7-0``,  ``2.0.6-0``,  ``2.0.5-0``,  ``2.0.4-0``,  ``2.0.3-0``,  ``2.0.2-0``,  ``1.0.12-1``,  ``1.0.12-0``,  ``1.0.11-1``,  ``1.0.11-0``,  ``1.0.10-0``,  ``1.0.8-0``,  ``1.0.7-1``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on numpy: ``>=2.2.0``
   :depends on psutil: ``>=5.9.4``
   :depends on pysam: ``>=0.21.0``
   :depends on python: ``>=3.10``
   :depends on python-edlib: ``>=1.3.9``

   :additional platforms:
      

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

    pixi global install sniffles

to add into an existing workspace instead, run::

    pixi add sniffles

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sniffles

Alternatively, to install into a new environment, run::

    conda create -n envname sniffles

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sniffles:<tag>

(see `sniffles/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sniffles| image:: https://img.shields.io/conda/dn/bioconda/sniffles.svg?style=flat
   :target: https://anaconda.org/bioconda/sniffles
   :alt:   (downloads)
.. |docker_sniffles| image:: https://quay.io/repository/biocontainers/sniffles/status
   :target: https://quay.io/repository/biocontainers/sniffles
.. _`sniffles/tags`: https://quay.io/repository/biocontainers/sniffles?tab=tags


.. raw:: html

    <script>
        var package = "sniffles";
        var versions = ["2.7.3","2.7.2","2.7.1","2.7.0","2.6.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sniffles/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sniffles/README.html