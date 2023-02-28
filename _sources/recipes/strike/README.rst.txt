:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'strike'
.. highlight: bash

strike
======

.. conda:recipe:: strike
   :replaces_section_title:
   :noindex:

   A program to evaluate protein multiple sequence alignments using a single protein structure.

   :homepage: http://www.tcoffee.org/Projects/strike/index.html
   :license: file
   :recipe: /`strike <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strike>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strike/meta.yaml>`_
   :links: biotools: :biotools:`STRIKE`, doi: :doi:`10.1093/bioinformatics/btr587`

   


.. conda:package:: strike

   |downloads_strike| |docker_strike|

   :versions:
      
      

      ``1.2-3``,  ``1.2-2``,  ``1.2-1``,  ``1.2-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install strike

   and update with::

      conda update strike

   or use the docker container::

      docker pull quay.io/biocontainers/strike:<tag>

   (see `strike/tags`_ for valid values for ``<tag>``)


.. |downloads_strike| image:: https://img.shields.io/conda/dn/bioconda/strike.svg?style=flat
   :target: https://anaconda.org/bioconda/strike
   :alt:   (downloads)
.. |docker_strike| image:: https://quay.io/repository/biocontainers/strike/status
   :target: https://quay.io/repository/biocontainers/strike
.. _`strike/tags`: https://quay.io/repository/biocontainers/strike?tab=tags


.. raw:: html

    <script>
        var package = "strike";
        var versions = ["1.2","1.2","1.2","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/strike/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/strike/README.html