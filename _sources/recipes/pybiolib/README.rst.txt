:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pybiolib'
.. highlight: bash

pybiolib
========

.. conda:recipe:: pybiolib
   :replaces_section_title:
   :noindex:

   BioLib Python Client

   :homepage: https://github.com/biolib
   :license: MIT
   :recipe: /`pybiolib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pybiolib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pybiolib/meta.yaml>`_
   :links: biotools: :biotools:`biolib`

   


.. conda:package:: pybiolib

   |downloads_pybiolib| |docker_pybiolib|

   :versions:
      
      

      ``1.1.911-0``,  ``1.1.862-0``,  ``1.1.860-0``,  ``1.1.835-0``,  ``1.1.825-0``,  ``1.1.824-0``,  ``1.1.822-0``,  ``1.1.814-0``,  ``1.1.809-0``

      

   
   :depends appdirs: ``>=1.4.3``
   :depends click: ``>=8.0.0,<8.1.0``
   :depends docker-py: ``>=5.0.3``
   :depends flask: ``>=2.0.1``
   :depends flask-cors: ``>=3.0.10``
   :depends gunicorn: ``>=20.1.0``
   :depends importlib-metadata: ``>=1.6.1``
   :depends pycryptodome: ``>=3.9.9``
   :depends pyjwt: ``>=2.3.0``
   :depends python: ``>=3.6,<4.0``
   :depends pyyaml: ``>=5.3.1``
   :depends requests: ``>=2.25.1,<2.30.0``
   :depends rich: ``>=12.4.4,<13.0.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pybiolib

   and update with::

      conda update pybiolib

   or use the docker container::

      docker pull quay.io/biocontainers/pybiolib:<tag>

   (see `pybiolib/tags`_ for valid values for ``<tag>``)


.. |downloads_pybiolib| image:: https://img.shields.io/conda/dn/bioconda/pybiolib.svg?style=flat
   :target: https://anaconda.org/bioconda/pybiolib
   :alt:   (downloads)
.. |docker_pybiolib| image:: https://quay.io/repository/biocontainers/pybiolib/status
   :target: https://quay.io/repository/biocontainers/pybiolib
.. _`pybiolib/tags`: https://quay.io/repository/biocontainers/pybiolib?tab=tags


.. raw:: html

    <script>
        var package = "pybiolib";
        var versions = ["1.1.911","1.1.862","1.1.860","1.1.835","1.1.825"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pybiolib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pybiolib/README.html