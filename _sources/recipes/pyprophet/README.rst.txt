.. title:: Package Recipe 'pyprophet'
.. highlight: bash


pyprophet
=========

.. conda:recipe:: pyprophet
   :replaces_section_title:

   Python reimplementation of mProphet peak scoring

   :homepage: http://github.com/uweschmitt/pyprophet
   :license: BSD / BSD License
   :recipe: /`pyprophet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyprophet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyprophet/meta.yaml>`_

   


.. conda:package:: pyprophet

   |downloads_pyprophet| |docker_pyprophet|

   :versions: 0.24.1, 0.22.0

   :depends: :conda:package:`matplotlib`  :conda:package:`numexpr` >=2.1 :conda:package:`numpy` >=1.9.0 :conda:package:`pandas` >=0.17 :conda:package:`python` 2.7* :conda:package:`scikit-learn` >=0.17 :conda:package:`scipy` >=0.9.0 :conda:package:`seaborn`  

   :required~by: |required_by_pyprophet|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pyprophet

   and update with::

      conda update pyprophet

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pyprophet


.. |required_by_pyprophet| conda:required_by:: pyprophet
.. |downloads_pyprophet| image:: https://img.shields.io/conda/dn/bioconda/pyprophet.svg?style=flat
   :alt:   (downloads)
.. |docker_pyprophet| image:: https://quay.io/repository/biocontainers/pyprophet/status
   :target: https://quay.io/repository/biocontainers/pyprophet







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyprophet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyprophet/README.html

