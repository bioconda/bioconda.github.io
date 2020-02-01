:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyslim'
.. highlight: bash

pyslim
======

.. conda:recipe:: pyslim
   :replaces_section_title:

   Manipulate tree sequences produced by SLiM.

   :homepage: https://github.com/tskit-dev/pyslim
   :documentation: https://pyslim.readthedocs.io/en/latest/
   
   :developer docs: https://pyslim.readthedocs.io/en/latest/development.html
   :license: MIT / MIT
   :recipe: /`pyslim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyslim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyslim/meta.yaml>`_

   


.. conda:package:: pyslim

   |downloads_pyslim| |docker_pyslim|

   :versions: 0.314-0
   
   :depends attrs: 
   :depends kastore: 
   :depends msprime: >=0.7.0
   :depends numpy: 
   :depends python: 
   :depends tskit: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pyslim

   and update with::

      conda update pyslim

   or use the docker container::

      docker pull quay.io/biocontainers/pyslim:<tag>

   (see `pyslim/tags`_ for valid values for ``<tag>``)


.. |downloads_pyslim| image:: https://img.shields.io/conda/dn/bioconda/pyslim.svg?style=flat
   :target: https://anaconda.org/bioconda/pyslim
   :alt:   (downloads)
.. |docker_pyslim| image:: https://quay.io/repository/biocontainers/pyslim/status
   :target: https://quay.io/repository/biocontainers/pyslim
.. _`pyslim/tags`: https://quay.io/repository/biocontainers/pyslim?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyslim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyslim/README.html