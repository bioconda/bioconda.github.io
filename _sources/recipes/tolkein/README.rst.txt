:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tolkein'
.. highlight: bash

tolkein
=======

.. conda:recipe:: tolkein
   :replaces_section_title:
   :noindex:

   Tree of Life Kit of Evolutionary Informatics Novelties

   :homepage: https://github.com/tolkit/tolkein
   :documentation: https://tolkein.readthedocs.io/
   
   :license: MIT / MIT
   :recipe: /`tolkein <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tolkein>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tolkein/meta.yaml>`_

   


.. conda:package:: tolkein

   |downloads_tolkein| |docker_tolkein|

   :versions:
      
      

      ``0.5.0-0``

      

   
   :depends docopt: ``>=0.6.2``
   :depends python: 
   :depends pyyaml: 
   :depends requests: ``>=2.24.0``
   :depends tqdm: ``>=4.48.1``
   :depends ujson: ``>=3.0.0``
   :depends xmltodict: ``>=0.12.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tolkein

   and update with::

      conda update tolkein

   or use the docker container::

      docker pull quay.io/biocontainers/tolkein:<tag>

   (see `tolkein/tags`_ for valid values for ``<tag>``)


.. |downloads_tolkein| image:: https://img.shields.io/conda/dn/bioconda/tolkein.svg?style=flat
   :target: https://anaconda.org/bioconda/tolkein
   :alt:   (downloads)
.. |docker_tolkein| image:: https://quay.io/repository/biocontainers/tolkein/status
   :target: https://quay.io/repository/biocontainers/tolkein
.. _`tolkein/tags`: https://quay.io/repository/biocontainers/tolkein?tab=tags


.. raw:: html

    <script>
        var package = "tolkein";
        var versions = ["0.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tolkein/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tolkein/README.html