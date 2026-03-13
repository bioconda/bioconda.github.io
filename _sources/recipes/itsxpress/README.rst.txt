:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'itsxpress'
.. highlight: bash

itsxpress
=========

.. conda:recipe:: itsxpress
   :replaces_section_title:
   :noindex:

   ITSxpress\: Software to rapidly trim the Internally Transcribed Spacer \(ITS\) region from FASTQ files.

   :homepage: http://github.com/usda-ars-gbru/itsxpress
   :license: PUBLIC-DOMAIN / CC0-1.0
   :recipe: /`itsxpress <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/itsxpress>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/itsxpress/meta.yaml>`_
   :links: biotools: :biotools:`ITSxpress`, doi: :doi:`10.5281/zenodo.1304349`, doi: :doi:`10.12688/f1000research.15704.1`

   


.. conda:package:: itsxpress

   |downloads_itsxpress| |docker_itsxpress|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1.4-0</code>,  <code>2.1.3-2</code>,  <code>2.1.3-1</code>,  <code>2.1.3-0</code>,  <code>2.1.2-0</code>,  <code>2.1.1-0</code>,  <code>2.1.0-0</code>,  <code>2.0.2-0</code>,  <code>2.0.1-0</code>,  </span></summary>
      

      ``2.1.4-0``,  ``2.1.3-2``,  ``2.1.3-1``,  ``2.1.3-0``,  ``2.1.2-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.8.1-0``,  ``1.8.0-2``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.7.2-1``,  ``1.7.2-0``,  ``1.7.1-0``,  ``1.6.4-0``,  ``1.6.3-0``,  ``1.6.1-1``,  ``1.6.1-0``,  ``1.5.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: ``>=1.79``
   :depends on hmmer: ``>=3.1b2``
   :depends on pandas: 
   :depends on python: ``>=3.7``
   :depends on pyzstd: 
   :depends on vsearch: 

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

    pixi global install itsxpress

to add into an existing workspace instead, run::

    pixi add itsxpress

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install itsxpress

Alternatively, to install into a new environment, run::

    conda create -n envname itsxpress

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/itsxpress:<tag>

(see `itsxpress/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_itsxpress| image:: https://img.shields.io/conda/dn/bioconda/itsxpress.svg?style=flat
   :target: https://anaconda.org/bioconda/itsxpress
   :alt:   (downloads)
.. |docker_itsxpress| image:: https://quay.io/repository/biocontainers/itsxpress/status
   :target: https://quay.io/repository/biocontainers/itsxpress
.. _`itsxpress/tags`: https://quay.io/repository/biocontainers/itsxpress?tab=tags


.. raw:: html

    <script>
        var package = "itsxpress";
        var versions = ["2.1.4","2.1.3","2.1.3","2.1.3","2.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/itsxpress/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/itsxpress/README.html