:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyasp'
.. highlight: bash

pyasp
=====

.. conda:recipe:: pyasp
   :replaces_section_title:
   :noindex:

   A convenience wrapper for the ASP tools gringo\, gringo4 and clasp.

   :homepage: http://pypi.python.org/pypi/pyasp/
   :license: GPLv3+
   :recipe: /`pyasp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyasp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyasp/meta.yaml>`_

   


.. conda:package:: pyasp

   |downloads_pyasp| |docker_pyasp|

   :versions:
      
      

      ``1.4.3-1``,  ``1.4.3-0``

      

   
   :depends python: ``>=2.7,<2.8.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pyasp

   and update with::

      conda update pyasp

   or use the docker container::

      docker pull quay.io/biocontainers/pyasp:<tag>

   (see `pyasp/tags`_ for valid values for ``<tag>``)


.. |downloads_pyasp| image:: https://img.shields.io/conda/dn/bioconda/pyasp.svg?style=flat
   :target: https://anaconda.org/bioconda/pyasp
   :alt:   (downloads)
.. |docker_pyasp| image:: https://quay.io/repository/biocontainers/pyasp/status
   :target: https://quay.io/repository/biocontainers/pyasp
.. _`pyasp/tags`: https://quay.io/repository/biocontainers/pyasp?tab=tags


.. raw:: html

    <script>
        var package = "pyasp";
        var versions = ["1.4.3","1.4.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyasp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyasp/README.html