.. title:: Package Recipe 'pyrad'
.. highlight: bash


pyrad
=====

.. conda:recipe:: pyrad
   :replaces_section_title:

   Assembly and analysis of RADseq data sets

   :homepage: https://github.com/dereneaton/pyrad
   :license: GPLv3
   :recipe: /`pyrad <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyrad>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyrad/meta.yaml>`_

   


.. conda:package:: pyrad

   |downloads_pyrad| |docker_pyrad|

   :versions: 3.0.66, 3.0.64

   :depends: :conda:package:`muscle`  :conda:package:`numpy`  :conda:package:`python` 2.7* :conda:package:`scipy`  :conda:package:`vsearch`  

   :required~by: |required_by_pyrad|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pyrad

   and update with::

      conda update pyrad

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pyrad


.. |required_by_pyrad| conda:required_by:: pyrad
.. |downloads_pyrad| image:: https://img.shields.io/conda/dn/bioconda/pyrad.svg?style=flat
   :alt:   (downloads)
.. |docker_pyrad| image:: https://quay.io/repository/biocontainers/pyrad/status
   :target: https://quay.io/repository/biocontainers/pyrad







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyrad/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyrad/README.html

