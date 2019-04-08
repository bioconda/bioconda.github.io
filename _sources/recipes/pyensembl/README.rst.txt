:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyensembl'
.. highlight: bash

pyensembl
=========

.. conda:recipe:: pyensembl
   :replaces_section_title:

   Python interface to ensembl reference genome metadata

   :homepage: https://github.com/openvax/pyensembl
   :license: Apache / Apache-2.0
   :recipe: /`pyensembl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyensembl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyensembl/meta.yaml>`_

   


.. conda:package:: pyensembl

   |downloads_pyensembl| |docker_pyensembl|

   :versions: 1.7.3-1, 1.7.3-0, 1.7.2-0, 1.2.6-2, 1.2.6-1, 1.2.6-0
   
   :depends datacache: >=0.4.19
   :depends gtfparse: >=0.0.3
   :depends memoized-property: >=1.0.2
   :depends numpy: >=1.7
   :depends pandas: >=0.15
   :depends pylint: >=1.4.4
   :depends python: 
   :depends python-dateutil: >=2.5.0
   :depends serializable: 
   :depends six: >=1.9.0
   :depends tinytimer: 
   :depends typechecks: >=0.0.2
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pyensembl

   and update with::

      conda update pyensembl

   or use the docker container::

      docker pull quay.io/biocontainers/pyensembl:<tag>

   (see `pyensembl/tags`_ for valid values for ``<tag>``)


.. |downloads_pyensembl| image:: https://img.shields.io/conda/dn/bioconda/pyensembl.svg?style=flat
   :alt:   (downloads)
.. |docker_pyensembl| image:: https://quay.io/repository/biocontainers/pyensembl/status
   :target: https://quay.io/repository/biocontainers/pyensembl
.. _`pyensembl/tags`: https://quay.io/repository/biocontainers/pyensembl?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyensembl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyensembl/README.html