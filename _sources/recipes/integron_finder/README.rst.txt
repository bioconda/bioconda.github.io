:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'integron_finder'
.. highlight: bash

integron_finder
===============

.. conda:recipe:: integron_finder
   :replaces_section_title:
   :noindex:

   Finds integrons in DNA sequences

   :homepage: https://github.com/gem-pasteur/Integron_Finder
   :license: GPLv3
   :recipe: /`integron_finder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/integron_finder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/integron_finder/meta.yaml>`_

   


.. conda:package:: integron_finder

   |downloads_integron_finder| |docker_integron_finder|

   :versions:
      
      

      ``2.0-0``,  ``2.0rc6-0``

      

   
   :depends biopython: ``1.78``
   :depends colorlog: ``<=6.6.0``
   :depends hmmer: ``>=3.1b2,<=3.3.2``
   :depends infernal: ``>=1.1.2,<=1.1.4``
   :depends matplotlib-base: ``3.3.3``
   :depends numpy: ``1.19.4``
   :depends pandas: ``1.1.5``
   :depends prodigal: ``>=2.6.3``
   :depends python: ``>=3.7,<=3.10``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install integron_finder

   and update with::

      conda update integron_finder

   or use the docker container::

      docker pull quay.io/biocontainers/integron_finder:<tag>

   (see `integron_finder/tags`_ for valid values for ``<tag>``)


.. |downloads_integron_finder| image:: https://img.shields.io/conda/dn/bioconda/integron_finder.svg?style=flat
   :target: https://anaconda.org/bioconda/integron_finder
   :alt:   (downloads)
.. |docker_integron_finder| image:: https://quay.io/repository/biocontainers/integron_finder/status
   :target: https://quay.io/repository/biocontainers/integron_finder
.. _`integron_finder/tags`: https://quay.io/repository/biocontainers/integron_finder?tab=tags


.. raw:: html

    <script>
        var package = "integron_finder";
        var versions = ["2.0","2.0rc6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/integron_finder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/integron_finder/README.html