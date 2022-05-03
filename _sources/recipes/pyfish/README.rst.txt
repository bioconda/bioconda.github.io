:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyfish'
.. highlight: bash

pyfish
======

.. conda:recipe:: pyfish
   :replaces_section_title:
   :noindex:

   Plotting tool for evolutionary population dynamics. Creates a Fish \(Muller\) plot.

   :homepage: https://bitbucket.org/schwarzlab/pyfish
   :license: GPL-3
   :recipe: /`pyfish <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyfish>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyfish/meta.yaml>`_

   


.. conda:package:: pyfish

   |downloads_pyfish| |docker_pyfish|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends matplotlib-base: ``>=3.0``
   :depends numpy: ``>=1.14``
   :depends pandas: ``>=1.0``
   :depends python: ``>=3.8``
   :depends scipy: ``>=1.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pyfish

   and update with::

      conda update pyfish

   or use the docker container::

      docker pull quay.io/biocontainers/pyfish:<tag>

   (see `pyfish/tags`_ for valid values for ``<tag>``)


.. |downloads_pyfish| image:: https://img.shields.io/conda/dn/bioconda/pyfish.svg?style=flat
   :target: https://anaconda.org/bioconda/pyfish
   :alt:   (downloads)
.. |docker_pyfish| image:: https://quay.io/repository/biocontainers/pyfish/status
   :target: https://quay.io/repository/biocontainers/pyfish
.. _`pyfish/tags`: https://quay.io/repository/biocontainers/pyfish?tab=tags


.. raw:: html

    <script>
        var package = "pyfish";
        var versions = ["1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyfish/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyfish/README.html