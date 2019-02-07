.. title:: Package Recipe 'pypairs'
.. highlight: bash


pypairs
=======

.. conda:recipe:: pypairs
   :replaces_section_title:

   A python scRNA\-Seq classifier

   :homepage: https://github.com/rfechtner/pypairs
   :documentation: https://pypairs.readthedocs.io/
   
   :license: BSD / BSD
   :recipe: /`pypairs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pypairs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pypairs/meta.yaml>`_

   


.. conda:package:: pypairs

   |downloads_pypairs| |docker_pypairs|

   :versions: 3.0.9, 2.0.6, 2.0.5

   :depends: :conda:package:`anndata` >=0.6.13 :conda:package:`colorama`  :conda:package:`h5py` >=2.8.0 :conda:package:`numba` >=0.40.1 :conda:package:`numpy` >=1.15.4 :conda:package:`pandas` >=0.23.4 :conda:package:`psutil`  :conda:package:`python` >3 :conda:package:`scikit-learn`  

   :required~by: |required_by_pypairs|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pypairs

   and update with::

      conda update pypairs

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pypairs


.. |required_by_pypairs| conda:required_by:: pypairs
.. |downloads_pypairs| image:: https://img.shields.io/conda/dn/bioconda/pypairs.svg?style=flat
   :alt:   (downloads)
.. |docker_pypairs| image:: https://quay.io/repository/biocontainers/pypairs/status
   :target: https://quay.io/repository/biocontainers/pypairs







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pypairs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pypairs/README.html

