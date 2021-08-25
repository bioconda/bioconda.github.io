:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ocrad'
.. highlight: bash

ocrad
=====

.. conda:recipe:: ocrad/0.21
   :replaces_section_title:
   :noindex:

   Ocrad is an optical character recognition program.

   :homepage: https://www.gnu.org/software/ocrad/
   :license: GPL
   :recipe: /`ocrad <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ocrad>`_/`0.21 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ocrad/0.21>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ocrad/0.21/meta.yaml>`_

   


.. conda:package:: ocrad

   |downloads_ocrad| |docker_ocrad|

   :versions:
      
      

      ``0.21-1``,  ``0.21-0``

      

   
   :depends libgcc-ng: ``>=4.9``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ocrad

   and update with::

      conda update ocrad

   or use the docker container::

      docker pull quay.io/biocontainers/ocrad:<tag>

   (see `ocrad/tags`_ for valid values for ``<tag>``)


.. |downloads_ocrad| image:: https://img.shields.io/conda/dn/bioconda/ocrad.svg?style=flat
   :target: https://anaconda.org/bioconda/ocrad
   :alt:   (downloads)
.. |docker_ocrad| image:: https://quay.io/repository/biocontainers/ocrad/status
   :target: https://quay.io/repository/biocontainers/ocrad
.. _`ocrad/tags`: https://quay.io/repository/biocontainers/ocrad?tab=tags


.. raw:: html

    <script>
        var package = "ocrad";
        var versions = ["0.21","0.21"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ocrad/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ocrad/README.html