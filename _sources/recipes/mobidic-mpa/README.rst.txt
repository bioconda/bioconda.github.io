:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mobidic-mpa'
.. highlight: bash

mobidic-mpa
===========

.. conda:recipe:: mobidic-mpa
   :replaces_section_title:
   :noindex:

   MPA\: MoBiDiC Prioritization Algorithm

   :homepage: https://neuro-2.iurc.montp.inserm.fr/mpaweb/
   :developer docs: https://github.com/mobidic/MPA
   :license: MIT / MIT
   :recipe: /`mobidic-mpa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mobidic-mpa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mobidic-mpa/meta.yaml>`_
   :links: doi: :doi:`10.1016/j.jmoldx.2018.03.009`

   


.. conda:package:: mobidic-mpa

   |downloads_mobidic-mpa| |docker_mobidic-mpa|

   :versions:
      
      

      ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-0``

      

   
   :depends python: 
   :depends pyvcf: ``0.6.8``
   :depends tqdm: ``4.59.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mobidic-mpa

   and update with::

      conda update mobidic-mpa

   or use the docker container::

      docker pull quay.io/biocontainers/mobidic-mpa:<tag>

   (see `mobidic-mpa/tags`_ for valid values for ``<tag>``)


.. |downloads_mobidic-mpa| image:: https://img.shields.io/conda/dn/bioconda/mobidic-mpa.svg?style=flat
   :target: https://anaconda.org/bioconda/mobidic-mpa
   :alt:   (downloads)
.. |docker_mobidic-mpa| image:: https://quay.io/repository/biocontainers/mobidic-mpa/status
   :target: https://quay.io/repository/biocontainers/mobidic-mpa
.. _`mobidic-mpa/tags`: https://quay.io/repository/biocontainers/mobidic-mpa?tab=tags


.. raw:: html

    <script>
        var package = "mobidic-mpa";
        var versions = ["1.2.2","1.2.1","1.2.0","1.1.3","1.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mobidic-mpa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mobidic-mpa/README.html