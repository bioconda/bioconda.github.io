:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'influx_si'
.. highlight: bash

influx_si
=========

.. conda:recipe:: influx_si
   :replaces_section_title:

   Metabolic flux and concentration estimation based on stable isotope labeling

   :homepage: https://metasys.insa-toulouse.fr/software/influx/
   :documentation: https://metasys.insa-toulouse.fr/software/influx/doc/
   
   :developer docs: https://github.com/sgsokol/influx/
   :license: GPL2 / GNU General Public v2 or later (GPLv2+)
   :recipe: /`influx_si <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/influx_si>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/influx_si/meta.yaml>`_

   To install this package from bioconda run\:
   \`conda install \-c conda\-forge \-c bioconda influx\_si\`



.. conda:package:: influx_si

   |downloads_influx_si| |docker_influx_si|

   :versions: 5.1.0-1, 5.1.0-0, 5.0.3-0, 5.0.2-0, 5.0.1-1, 5.0.1-0, 5.0-0
   
   :depends python: >=3
   :depends python-libsbml: 
   :depends r-arrapply: 
   :depends r-base: 
   :depends r-limsolve: 
   :depends r-multbxxc: 
   :depends r-nnls: 
   :depends r-rcpp: >=1.0.0
   :depends r-rcpparmadillo: 
   :depends r-rmumps: >=5.2.1_12
   :depends r-slam: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install influx_si

   and update with::

      conda update influx_si

   or use the docker container::

      docker pull quay.io/biocontainers/influx_si:<tag>

   (see `influx_si/tags`_ for valid values for ``<tag>``)


.. |downloads_influx_si| image:: https://img.shields.io/conda/dn/bioconda/influx_si.svg?style=flat
   :target: https://anaconda.org/bioconda/influx_si
   :alt:   (downloads)
.. |docker_influx_si| image:: https://quay.io/repository/biocontainers/influx_si/status
   :target: https://quay.io/repository/biocontainers/influx_si
.. _`influx_si/tags`: https://quay.io/repository/biocontainers/influx_si?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/influx_si/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/influx_si/README.html