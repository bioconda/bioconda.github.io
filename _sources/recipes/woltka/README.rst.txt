:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'woltka'
.. highlight: bash

woltka
======

.. conda:recipe:: woltka
   :replaces_section_title:
   :noindex:

   versatile meta\-omic data classifier

   :homepage: https://github.com/qiyunzhu/woltka
   :license: BSD / BSD
   :recipe: /`woltka <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/woltka>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/woltka/meta.yaml>`_

   


.. conda:package:: woltka

   |downloads_woltka| |docker_woltka|

   :versions:
      
      

      ``0.1.5-0``,  ``0.1.4-0``

      

   
   :depends biom-format: 
   :depends python: 
   :depends setuptools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install woltka

   and update with::

      conda update woltka

   or use the docker container::

      docker pull quay.io/biocontainers/woltka:<tag>

   (see `woltka/tags`_ for valid values for ``<tag>``)


.. |downloads_woltka| image:: https://img.shields.io/conda/dn/bioconda/woltka.svg?style=flat
   :target: https://anaconda.org/bioconda/woltka
   :alt:   (downloads)
.. |docker_woltka| image:: https://quay.io/repository/biocontainers/woltka/status
   :target: https://quay.io/repository/biocontainers/woltka
.. _`woltka/tags`: https://quay.io/repository/biocontainers/woltka?tab=tags


.. raw:: html

    <script>
        var package = "woltka";
        var versions = ["0.1.5","0.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/woltka/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/woltka/README.html