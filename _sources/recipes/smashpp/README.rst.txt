:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'smashpp'
.. highlight: bash

smashpp
=======

.. conda:recipe:: smashpp
   :replaces_section_title:
   :noindex:

   A fast tool to find and visualize rearrangements in DNA sequences

   :homepage: https://github.com/smortezah/smashpp
   :license: GPL / GPL3
   :recipe: /`smashpp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smashpp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smashpp/meta.yaml>`_

   


.. conda:package:: smashpp

   |downloads_smashpp| |docker_smashpp|

   :versions:
      
      

      ``22.08-2``,  ``22.08-1``,  ``22.08-0``,  ``20.04-2``,  ``20.04-1``,  ``20.04-0``,  ``19.12-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install smashpp

   and update with::

      conda update smashpp

   or use the docker container::

      docker pull quay.io/biocontainers/smashpp:<tag>

   (see `smashpp/tags`_ for valid values for ``<tag>``)


.. |downloads_smashpp| image:: https://img.shields.io/conda/dn/bioconda/smashpp.svg?style=flat
   :target: https://anaconda.org/bioconda/smashpp
   :alt:   (downloads)
.. |docker_smashpp| image:: https://quay.io/repository/biocontainers/smashpp/status
   :target: https://quay.io/repository/biocontainers/smashpp
.. _`smashpp/tags`: https://quay.io/repository/biocontainers/smashpp?tab=tags


.. raw:: html

    <script>
        var package = "smashpp";
        var versions = ["22.08","22.08","22.08","20.04","20.04"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/smashpp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/smashpp/README.html