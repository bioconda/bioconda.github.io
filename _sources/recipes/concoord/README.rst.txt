:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'concoord'
.. highlight: bash

concoord
========

.. conda:recipe:: concoord
   :replaces_section_title:
   :noindex:

   CONCOORD is a method to generate protein conformations around a known structure based on geometric restrictions.

   :homepage: https://www3.mpibpc.mpg.de/groups/de_groot/concoord
   :license: APACHE / Apache Software License
   :recipe: /`concoord <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/concoord>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/concoord/meta.yaml>`_

   CONCOORD is a method to generate protein conformations around a known structure based on geometric restrictions.


.. conda:package:: concoord

   |downloads_concoord| |docker_concoord|

   :versions:
      
      

      ``2.1.2-1``,  ``2.1.2-0``

      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install concoord

   and update with::

      conda update concoord

   or use the docker container::

      docker pull quay.io/biocontainers/concoord:<tag>

   (see `concoord/tags`_ for valid values for ``<tag>``)


.. |downloads_concoord| image:: https://img.shields.io/conda/dn/bioconda/concoord.svg?style=flat
   :target: https://anaconda.org/bioconda/concoord
   :alt:   (downloads)
.. |docker_concoord| image:: https://quay.io/repository/biocontainers/concoord/status
   :target: https://quay.io/repository/biocontainers/concoord
.. _`concoord/tags`: https://quay.io/repository/biocontainers/concoord?tab=tags


.. raw:: html

    <script>
        var package = "concoord";
        var versions = ["2.1.2","2.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/concoord/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/concoord/README.html