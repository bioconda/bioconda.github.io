:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'eval'
.. highlight: bash

eval
====

.. conda:recipe:: eval
   :replaces_section_title:

   Eval is a flexible tool for analyzing the performance of gene\-structure prediction programs.

   :homepage: http://mblab.wustl.edu/software.html
   :documentation: http://mblab.wustl.edu/software/download/eval-documentation.pdf
   
   :license: BSD / BSD 2-Clause
   :recipe: /`eval <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eval>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eval/meta.yaml>`_

   


.. conda:package:: eval

   |downloads_eval| |docker_eval|

   :versions: 2.2.8-1, 2.2.8-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-bioperl: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install eval

   and update with::

      conda update eval

   or use the docker container::

      docker pull quay.io/biocontainers/eval:<tag>

   (see `eval/tags`_ for valid values for ``<tag>``)


.. |downloads_eval| image:: https://img.shields.io/conda/dn/bioconda/eval.svg?style=flat
   :target: https://anaconda.org/bioconda/eval
   :alt:   (downloads)
.. |docker_eval| image:: https://quay.io/repository/biocontainers/eval/status
   :target: https://quay.io/repository/biocontainers/eval
.. _`eval/tags`: https://quay.io/repository/biocontainers/eval?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/eval/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/eval/README.html