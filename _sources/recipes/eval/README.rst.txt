:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'eval'
.. highlight: bash

eval
====

.. conda:recipe:: eval
   :replaces_section_title:
   :noindex:

   Eval is a flexible tool for analyzing the performance of gene\-structure prediction programs.

   :homepage: http://mblab.wustl.edu/software.html
   :documentation: http://mblab.wustl.edu/software/download/eval-documentation.pdf
   
   :license: BSD / BSD 2-Clause
   :recipe: /`eval <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eval>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eval/meta.yaml>`_

   


.. conda:package:: eval

   |downloads_eval| |docker_eval|

   :versions:
      
      

      ``2.2.8-1``,  ``2.2.8-0``

      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-bioperl: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install eval

   and update with::

      mamba update eval

  To create a new environment, run::

      mamba create --name myenvname eval

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/eval:<tag>

   (see `eval/tags`_ for valid values for ``<tag>``)


.. |downloads_eval| image:: https://img.shields.io/conda/dn/bioconda/eval.svg?style=flat
   :target: https://anaconda.org/bioconda/eval
   :alt:   (downloads)
.. |docker_eval| image:: https://quay.io/repository/biocontainers/eval/status
   :target: https://quay.io/repository/biocontainers/eval
.. _`eval/tags`: https://quay.io/repository/biocontainers/eval?tab=tags


.. raw:: html

    <script>
        var package = "eval";
        var versions = ["2.2.8","2.2.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/eval/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/eval/README.html