.. title:: Package Recipe 'python-hyphy-python'
.. highlight: bash


python-hyphy-python
===================

.. conda:recipe:: python-hyphy-python
   :replaces_section_title:

   HyPhy package interface library

   :homepage: https://github.com/veg/hyphy-python
   :license: UNKNOWN
   :recipe: /`python-hyphy-python <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-hyphy-python>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-hyphy-python/meta.yaml>`_

   


.. conda:package:: python-hyphy-python

   |downloads_python-hyphy-python| |docker_python-hyphy-python|

   :versions: 0.1.9, 0.1.6, 0.1.3

   :depends: :conda:package:`curl` >=7.59.0,<8.0a0 :conda:package:`python` >=2.7,<2.8.0a0 

   :required~by: |required_by_python-hyphy-python|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install python-hyphy-python

   and update with::

      conda update python-hyphy-python

   or use the docker container::

      docker pull quay.io/repository/biocontainers/python-hyphy-python


.. |required_by_python-hyphy-python| conda:required_by:: python-hyphy-python
.. |downloads_python-hyphy-python| image:: https://img.shields.io/conda/dn/bioconda/python-hyphy-python.svg?style=flat
   :alt:   (downloads)
.. |docker_python-hyphy-python| image:: https://quay.io/repository/biocontainers/python-hyphy-python/status
   :target: https://quay.io/repository/biocontainers/python-hyphy-python







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/python-hyphy-python/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/python-hyphy-python/README.html

