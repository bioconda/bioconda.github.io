:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pegs'
.. highlight: bash

pegs
====

.. conda:recipe:: pegs
   :replaces_section_title:
   :noindex:

   Peak\-set Enrichment of Gene\-Sets \(PEGS\)

   :homepage: https://github.com/fls-bioinformatics-core/pegs
   :documentation: https://pegs.readthedocs.io/en/latest/
   
   :license: BSD / BSD
   :recipe: /`pegs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pegs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pegs/meta.yaml>`_

   


.. conda:package:: pegs

   |downloads_pegs| |docker_pegs|

   :versions:
      
      

      ``0.6.4-0``,  ``0.6.3-0``,  ``0.6.2-0``,  ``0.6.1-0``

      

   
   :depends matplotlib-base: ``3.3.4``
   :depends numpy: ``1.19.5``
   :depends pathlib2: 
   :depends pillow: ``8.1.1``
   :depends python: ``>=3.6``
   :depends scipy: ``1.5``
   :depends seaborn: ``0.11.1``
   :depends xlsxwriter: ``>=0.8.4``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pegs

   and update with::

      conda update pegs

   or use the docker container::

      docker pull quay.io/biocontainers/pegs:<tag>

   (see `pegs/tags`_ for valid values for ``<tag>``)


.. |downloads_pegs| image:: https://img.shields.io/conda/dn/bioconda/pegs.svg?style=flat
   :target: https://anaconda.org/bioconda/pegs
   :alt:   (downloads)
.. |docker_pegs| image:: https://quay.io/repository/biocontainers/pegs/status
   :target: https://quay.io/repository/biocontainers/pegs
.. _`pegs/tags`: https://quay.io/repository/biocontainers/pegs?tab=tags


.. raw:: html

    <script>
        var package = "pegs";
        var versions = ["0.6.4","0.6.3","0.6.2","0.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pegs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pegs/README.html