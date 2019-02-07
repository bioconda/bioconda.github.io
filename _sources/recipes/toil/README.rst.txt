.. title:: Package Recipe 'toil'
.. highlight: bash


toil
====

.. conda:recipe:: toil
   :replaces_section_title:

   A scalable\, efficient\, cross\-platform and easy\-to\-use workflow engine in pure Python

   :homepage: https://github.com/BD2KGenomics/toil
   :license: Apache 2.0
   :recipe: /`toil <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/toil>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/toil/meta.yaml>`_

   


.. conda:package:: toil

   |downloads_toil| |docker_toil|

   :versions: 3.14.0, 3.13.0a1, 3.11.0, 3.11.0a1, 3.10.0, 3.10.0a1, 3.9.0a1, 3.8.0a1, 3.7.0a, 3.6.0, 3.5.0a1, 3.4.0a1, 3.3.0a1, 3.2.0a2

   :depends: :conda:package:`azure`  :conda:package:`bd2k-python-lib` ==1.14a1.dev37 :conda:package:`boto` >=2.38.0 :conda:package:`cachecontrol` >=0.11.7,<0.12 :conda:package:`cgcloud-lib`  :conda:package:`cwltool` ==1.0.20180130110340 :conda:package:`dill`  :conda:package:`docker-py` >=2.5.1 :conda:package:`future`  :conda:package:`futures`  :conda:package:`galaxy-lib` >=17.9.3 :conda:package:`gcs-oauth2-boto-plugin` ==1.9 :conda:package:`mistune` >=0.7.3,<0.8 :conda:package:`psutil`  :conda:package:`pynacl` ==1.1.2 :conda:package:`python` 2.7* :conda:package:`rdflib` >=4.2.2 :conda:package:`rdflib-jsonld` >=0.3.0 :conda:package:`requests` >=2.18.4 :conda:package:`ruamel.yaml` >=0.12.4,<0.15 :conda:package:`six`  :conda:package:`typing` >=3.5.3,<3.6 

   :required~by: |required_by_toil|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install toil

   and update with::

      conda update toil

   or use the docker container::

      docker pull quay.io/repository/biocontainers/toil


.. |required_by_toil| conda:required_by:: toil
.. |downloads_toil| image:: https://img.shields.io/conda/dn/bioconda/toil.svg?style=flat
   :alt:   (downloads)
.. |docker_toil| image:: https://quay.io/repository/biocontainers/toil/status
   :target: https://quay.io/repository/biocontainers/toil







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/toil/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/toil/README.html

