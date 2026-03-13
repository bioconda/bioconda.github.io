:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'coprarna'
.. highlight: bash

coprarna
========

.. conda:recipe:: coprarna
   :replaces_section_title:
   :noindex:

   Target prediction for prokaryotic trans\-acting small RNAs

   :homepage: https://github.com/PatrickRWright/CopraRNA
   :license: MIT
   :recipe: /`coprarna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coprarna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coprarna/meta.yaml>`_

   


.. conda:package:: coprarna

   |downloads_coprarna| |docker_coprarna|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1.4-0</code>,  <code>2.1.3-9</code>,  <code>2.1.3-8</code>,  <code>2.1.3-7</code>,  <code>2.1.3-6</code>,  <code>2.1.3-5</code>,  <code>2.1.3-4</code>,  <code>2.1.3-3</code>,  <code>2.1.3-2</code>,  </span></summary>
      

      ``2.1.4-0``,  ``2.1.3-9``,  ``2.1.3-8``,  ``2.1.3-7``,  ``2.1.3-6``,  ``2.1.3-5``,  ``2.1.3-4``,  ``2.1.3-3``,  ``2.1.3-2``,  ``2.1.3-1``,  ``2.1.3-0``,  ``2.1.2-0``,  ``2.1.1-0``,  ``2.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on blast-legacy: 
   :depends on bzip2: 
   :depends on clustalo: 
   :depends on coreutils: 
   :depends on domclust: 
   :depends on embassy-phylip: 
   :depends on emboss: 
   :depends on gawk: 
   :depends on grep: 
   :depends on intarna: ``>2.2,<3``
   :depends on mafft: 
   :depends on perl: ``<6``
   :depends on perl-bio-eutilities: 
   :depends on perl-bioperl: 
   :depends on perl-getopt-long: 
   :depends on perl-list-moreutils: 
   :depends on perl-parallel-forkmanager: 
   :depends on phantomjs: 
   :depends on python: 
   :depends on r-base: ``<4``
   :depends on r-pheatmap: 
   :depends on r-robustrankaggreg: 
   :depends on r-seqinr: 
   :depends on sed: 
   :depends on suds-jurko: 

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

    pixi global install coprarna

to add into an existing workspace instead, run::

    pixi add coprarna

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install coprarna

Alternatively, to install into a new environment, run::

    conda create -n envname coprarna

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/coprarna:<tag>

(see `coprarna/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_coprarna| image:: https://img.shields.io/conda/dn/bioconda/coprarna.svg?style=flat
   :target: https://anaconda.org/bioconda/coprarna
   :alt:   (downloads)
.. |docker_coprarna| image:: https://quay.io/repository/biocontainers/coprarna/status
   :target: https://quay.io/repository/biocontainers/coprarna
.. _`coprarna/tags`: https://quay.io/repository/biocontainers/coprarna?tab=tags


.. raw:: html

    <script>
        var package = "coprarna";
        var versions = ["2.1.4","2.1.3","2.1.3","2.1.3","2.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/coprarna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/coprarna/README.html