:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ostir'
.. highlight: bash

ostir
=====

.. conda:recipe:: ostir
   :replaces_section_title:
   :noindex:

   Open Source Transcription Initiation Rates

   :homepage: https://github.com/barricklab/ostir
   :license: GPL3 / GNU General Public v3 or later (GPLv3+)
   :recipe: /`ostir <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ostir>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ostir/meta.yaml>`_

   


.. conda:package:: ostir

   |downloads_ostir| |docker_ostir|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``

      

   
   :depends numpy: ``>=1.20.1``
   :depends python: ``>=3.7``
   :depends viennarna: ``>=2.4.18``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ostir

   and update with::

      conda update ostir

   or use the docker container::

      docker pull quay.io/biocontainers/ostir:<tag>

   (see `ostir/tags`_ for valid values for ``<tag>``)


.. |downloads_ostir| image:: https://img.shields.io/conda/dn/bioconda/ostir.svg?style=flat
   :target: https://anaconda.org/bioconda/ostir
   :alt:   (downloads)
.. |docker_ostir| image:: https://quay.io/repository/biocontainers/ostir/status
   :target: https://quay.io/repository/biocontainers/ostir
.. _`ostir/tags`: https://quay.io/repository/biocontainers/ostir?tab=tags


.. raw:: html

    <script>
        var package = "ostir";
        var versions = ["1.1.0","1.0.6","1.0.5","1.0.4","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ostir/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ostir/README.html