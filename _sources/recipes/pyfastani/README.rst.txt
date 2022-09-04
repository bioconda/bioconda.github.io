:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyfastani'
.. highlight: bash

pyfastani
=========

.. conda:recipe:: pyfastani
   :replaces_section_title:
   :noindex:

   Cython bindings and Python interface to FastANI\, a method for fast whole\-genome similarity estimation..

   :homepage: https://github.com/althonos/pyfastani
   :documentation: https://pyfastani.readthedocs.org/
   
   :license: MIT
   :recipe: /`pyfastani <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyfastani>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyfastani/meta.yaml>`_

   


.. conda:package:: pyfastani

   |downloads_pyfastani| |docker_pyfastani|

   :versions:
      
      

      ``0.4.0-0``,  ``0.3.1-0``,  ``0.3.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends setuptools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pyfastani

   and update with::

      conda update pyfastani

   or use the docker container::

      docker pull quay.io/biocontainers/pyfastani:<tag>

   (see `pyfastani/tags`_ for valid values for ``<tag>``)


.. |downloads_pyfastani| image:: https://img.shields.io/conda/dn/bioconda/pyfastani.svg?style=flat
   :target: https://anaconda.org/bioconda/pyfastani
   :alt:   (downloads)
.. |docker_pyfastani| image:: https://quay.io/repository/biocontainers/pyfastani/status
   :target: https://quay.io/repository/biocontainers/pyfastani
.. _`pyfastani/tags`: https://quay.io/repository/biocontainers/pyfastani?tab=tags


.. raw:: html

    <script>
        var package = "pyfastani";
        var versions = ["0.4.0","0.3.1","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyfastani/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyfastani/README.html