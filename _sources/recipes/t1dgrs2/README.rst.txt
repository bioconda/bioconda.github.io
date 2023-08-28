:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 't1dgrs2'
.. highlight: bash

t1dgrs2
=======

.. conda:recipe:: t1dgrs2
   :replaces_section_title:
   :noindex:

   Generate a Type 1 Diabetes Genetic Risk Score that accounts for interactions between HLA\-DQ variants.

   :homepage: https://github.com/t2diabetesgenes/t1dgrs2
   :license: GPL / GPLv3
   :recipe: /`t1dgrs2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/t1dgrs2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/t1dgrs2/meta.yaml>`_

   


.. conda:package:: t1dgrs2

   |downloads_t1dgrs2| |docker_t1dgrs2|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends numpy: ``1.24.*``
   :depends pandas: ``1.5.*``
   :depends plink: 
   :depends python: ``>=3.11``
   :depends pyyaml: ``6.0.*``
   :depends scipy: ``1.10.*``
   :depends setuptools: ``67.6.*``
   :depends wheel: ``0.40.*``
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

      mamba install t1dgrs2

   and update with::

      mamba update t1dgrs2

  To create a new environment, run::

      mamba create --name myenvname t1dgrs2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/t1dgrs2:<tag>

   (see `t1dgrs2/tags`_ for valid values for ``<tag>``)


.. |downloads_t1dgrs2| image:: https://img.shields.io/conda/dn/bioconda/t1dgrs2.svg?style=flat
   :target: https://anaconda.org/bioconda/t1dgrs2
   :alt:   (downloads)
.. |docker_t1dgrs2| image:: https://quay.io/repository/biocontainers/t1dgrs2/status
   :target: https://quay.io/repository/biocontainers/t1dgrs2
.. _`t1dgrs2/tags`: https://quay.io/repository/biocontainers/t1dgrs2?tab=tags


.. raw:: html

    <script>
        var package = "t1dgrs2";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/t1dgrs2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/t1dgrs2/README.html