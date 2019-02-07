.. title:: Package Recipe 'refinem'
.. highlight: bash


refinem
=======

.. conda:recipe:: refinem
   :replaces_section_title:

   A toolbox for improving population genomes.

   :homepage: http://pypi.python.org/pypi/refinem/
   :documentation: https://github.com/dparks1134/RefineM/blob/master/README.md
   
   :developer docs: https://github.com/dparks1134/RefineM
   :license: GPL3 / GPL3
   :recipe: /`refinem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/refinem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/refinem/meta.yaml>`_

   


.. conda:package:: refinem

   |downloads_refinem| |docker_refinem|

   :versions: 0.0.24

   :depends: :conda:package:`biolib` >=0.0.45 :conda:package:`blast` >=2.6.0 :conda:package:`dendropy`  :conda:package:`diamond` >=0.9.9 :conda:package:`jinja2` >=2.7.3 :conda:package:`krona` >=2.7 :conda:package:`matplotlib` >=1.4.0 :conda:package:`mpld3` >=0.2 :conda:package:`numpy` >=1.9.0 :conda:package:`prodigal` >=2.6.3 :conda:package:`pysam`  :conda:package:`python` <3 :conda:package:`scipy` >=1.0.0 :conda:package:`weightedstats`  

   :required~by: |required_by_refinem|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install refinem

   and update with::

      conda update refinem

   or use the docker container::

      docker pull quay.io/repository/biocontainers/refinem


.. |required_by_refinem| conda:required_by:: refinem
.. |downloads_refinem| image:: https://img.shields.io/conda/dn/bioconda/refinem.svg?style=flat
   :alt:   (downloads)
.. |docker_refinem| image:: https://quay.io/repository/biocontainers/refinem/status
   :target: https://quay.io/repository/biocontainers/refinem







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/refinem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/refinem/README.html

