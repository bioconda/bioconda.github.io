:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hisat2'
.. highlight: bash

hisat2
======

.. conda:recipe:: hisat2
   :replaces_section_title:
   :noindex:

   Graph\-based alignment of next generation sequencing reads to a population of genomes.

   :homepage: http://daehwankimlab.github.io/hisat2
   :documentation: https://daehwankimlab.github.io/hisat2/manual/
   
   :developer docs: https://github.com/DaehwanKimLab/hisat2
   :license: GPL / GPL-3.0
   :recipe: /`hisat2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hisat2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hisat2/meta.yaml>`_
   :links: biotools: :biotools:`HISAT2`, doi: :doi:`10.1038/nmeth.3317`, doi: :doi:`10.1038/s41587-019-0201-4`, usegalaxy-eu: :usegalaxy-eu:`hisat2`

   HISAT2 is a fast and sensitive alignment program for mapping next\-generation sequencing reads \(both DNA and RNA\) to a population of human genomes as well as to a single reference genome.


.. conda:package:: hisat2

   |downloads_hisat2| |docker_hisat2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.2-0</code>,  <code>2.2.1-8</code>,  <code>2.2.1-7</code>,  <code>2.2.1-6</code>,  <code>2.2.1-5</code>,  <code>2.2.1-4</code>,  <code>2.2.1-3</code>,  <code>2.2.1-2</code>,  <code>2.2.1-0</code>,  </span></summary>
      

      ``2.2.2-0``,  ``2.2.1-8``,  ``2.2.1-7``,  ``2.2.1-6``,  ``2.2.1-5``,  ``2.2.1-4``,  ``2.2.1-3``,  ``2.2.1-2``,  ``2.2.1-0``,  ``2.2.0-4``,  ``2.2.0-3``,  ``2.2.0-2``,  ``2.2.0-1``,  ``2.2.0-0``,  ``2.1.0-4``,  ``2.1.0-3``,  ``2.1.0-2``,  ``2.1.0-1``,  ``2.1.0-0``,  ``2.0.5-2``,  ``2.0.5-1``,  ``2.0.4-1``,  ``2.0.4-0``,  ``2.0.3beta-0``,  ``2.0.2beta-0``,  ``2.0.1beta-0``,  ``2.0.0beta-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on perl: 
   :depends on python: ``>3.5``

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

    pixi global install hisat2

to add into an existing workspace instead, run::

    pixi add hisat2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hisat2

Alternatively, to install into a new environment, run::

    conda create -n envname hisat2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hisat2:<tag>

(see `hisat2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hisat2| image:: https://img.shields.io/conda/dn/bioconda/hisat2.svg?style=flat
   :target: https://anaconda.org/bioconda/hisat2
   :alt:   (downloads)
.. |docker_hisat2| image:: https://quay.io/repository/biocontainers/hisat2/status
   :target: https://quay.io/repository/biocontainers/hisat2
.. _`hisat2/tags`: https://quay.io/repository/biocontainers/hisat2?tab=tags


.. raw:: html

    <script>
        var package = "hisat2";
        var versions = ["2.2.2","2.2.1","2.2.1","2.2.1","2.2.1"];
    </script>





Notes
-----
Pre\-built indices for HISAT2 can be downloaded from https\:\/\/daehwankimlab.github.io\/hisat2\/download\/.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hisat2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hisat2/README.html