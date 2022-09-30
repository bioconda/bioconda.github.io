:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ezaai'
.. highlight: bash

ezaai
=====

.. conda:recipe:: ezaai
   :replaces_section_title:
   :noindex:

   EzAAI is a suite of workflows for improved AAI calculation performance 
   along with the novel module that provides hierarchical clustering analysis 
   and dendrogram representation.


   :homepage: http://leb.snu.ac.kr/ezaai
   :developer docs: https://github.com/endixk/ezaai
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`ezaai <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ezaai>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ezaai/meta.yaml>`_
   :links: doi: :doi:`10.1007/s12275-021-1154-0`

   


.. conda:package:: ezaai

   |downloads_ezaai| |docker_ezaai|

   :versions:
      
      

      ``1.2.2-0``

      

   
   :depends blast: 
   :depends diamond: 
   :depends mmseqs2: 
   :depends openjdk: ``>=8,<9``
   :depends prodigal: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ezaai

   and update with::

      conda update ezaai

   or use the docker container::

      docker pull quay.io/biocontainers/ezaai:<tag>

   (see `ezaai/tags`_ for valid values for ``<tag>``)


.. |downloads_ezaai| image:: https://img.shields.io/conda/dn/bioconda/ezaai.svg?style=flat
   :target: https://anaconda.org/bioconda/ezaai
   :alt:   (downloads)
.. |docker_ezaai| image:: https://quay.io/repository/biocontainers/ezaai/status
   :target: https://quay.io/repository/biocontainers/ezaai
.. _`ezaai/tags`: https://quay.io/repository/biocontainers/ezaai?tab=tags


.. raw:: html

    <script>
        var package = "ezaai";
        var versions = ["1.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ezaai/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ezaai/README.html