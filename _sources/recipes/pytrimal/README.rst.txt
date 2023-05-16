:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pytrimal'
.. highlight: bash

pytrimal
========

.. conda:recipe:: pytrimal
   :replaces_section_title:
   :noindex:

   Cython bindings and Python interface to trimAl\, a tool for automated alignment trimming.

   :homepage: https://github.com/althonos/pytrimal
   :documentation: https://pytrimal.readthedocs.org/
   
   :license: GPL / GPL-3
   :recipe: /`pytrimal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pytrimal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pytrimal/meta.yaml>`_

   


.. conda:package:: pytrimal

   |downloads_pytrimal| |docker_pytrimal|

   :versions:
      
      

      ``0.5.5-2``,  ``0.5.5-1``,  ``0.5.5-0``,  ``0.5.1-0``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.2-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends setuptools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pytrimal

   and update with::

      conda update pytrimal

   or use the docker container::

      docker pull quay.io/biocontainers/pytrimal:<tag>

   (see `pytrimal/tags`_ for valid values for ``<tag>``)


.. |downloads_pytrimal| image:: https://img.shields.io/conda/dn/bioconda/pytrimal.svg?style=flat
   :target: https://anaconda.org/bioconda/pytrimal
   :alt:   (downloads)
.. |docker_pytrimal| image:: https://quay.io/repository/biocontainers/pytrimal/status
   :target: https://quay.io/repository/biocontainers/pytrimal
.. _`pytrimal/tags`: https://quay.io/repository/biocontainers/pytrimal?tab=tags


.. raw:: html

    <script>
        var package = "pytrimal";
        var versions = ["0.5.5","0.5.5","0.5.5","0.5.1","0.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pytrimal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pytrimal/README.html