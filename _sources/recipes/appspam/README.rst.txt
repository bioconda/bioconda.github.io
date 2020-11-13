:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'appspam'
.. highlight: bash

appspam
=======

.. conda:recipe:: appspam
   :replaces_section_title:
   :noindex:

   Alignment\-free Phylogenetic Placement algorithm based on Spaced\-word Matches

   :homepage: https://github.com/matthiasblanke/App-SpaM/
   :documentation: https://github.com/matthiasblanke/App-SpaM#readme
   
   :license: GPL3
   :recipe: /`appspam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/appspam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/appspam/meta.yaml>`_

   


.. conda:package:: appspam

   |downloads_appspam| |docker_appspam|

   :versions:
      
      

      ``1.01-0``

      

   
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install appspam

   and update with::

      conda update appspam

   or use the docker container::

      docker pull quay.io/biocontainers/appspam:<tag>

   (see `appspam/tags`_ for valid values for ``<tag>``)


.. |downloads_appspam| image:: https://img.shields.io/conda/dn/bioconda/appspam.svg?style=flat
   :target: https://anaconda.org/bioconda/appspam
   :alt:   (downloads)
.. |docker_appspam| image:: https://quay.io/repository/biocontainers/appspam/status
   :target: https://quay.io/repository/biocontainers/appspam
.. _`appspam/tags`: https://quay.io/repository/biocontainers/appspam?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/appspam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/appspam/README.html