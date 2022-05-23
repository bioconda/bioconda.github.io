:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'python-crypt4gh'
.. highlight: bash

python-crypt4gh
===============

.. conda:recipe:: python-crypt4gh
   :replaces_section_title:
   :noindex:

   GA4GH cryptographic tools

   :homepage: https://github.com/EGA-archive/crypt4gh
   :license: APACHE / Apache-2.0
   :recipe: /`python-crypt4gh <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-crypt4gh>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-crypt4gh/meta.yaml>`_

   


.. conda:package:: python-crypt4gh

   |downloads_python-crypt4gh| |docker_python-crypt4gh|

   :versions:
      
      

      ``1.5-0``

      

   
   :depends bcrypt: 
   :depends cryptography: 
   :depends docopt: 
   :depends pynacl: 
   :depends python: ``>=3``
   :depends pyyaml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install python-crypt4gh

   and update with::

      conda update python-crypt4gh

   or use the docker container::

      docker pull quay.io/biocontainers/python-crypt4gh:<tag>

   (see `python-crypt4gh/tags`_ for valid values for ``<tag>``)


.. |downloads_python-crypt4gh| image:: https://img.shields.io/conda/dn/bioconda/python-crypt4gh.svg?style=flat
   :target: https://anaconda.org/bioconda/python-crypt4gh
   :alt:   (downloads)
.. |docker_python-crypt4gh| image:: https://quay.io/repository/biocontainers/python-crypt4gh/status
   :target: https://quay.io/repository/biocontainers/python-crypt4gh
.. _`python-crypt4gh/tags`: https://quay.io/repository/biocontainers/python-crypt4gh?tab=tags


.. raw:: html

    <script>
        var package = "python-crypt4gh";
        var versions = ["1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/python-crypt4gh/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/python-crypt4gh/README.html