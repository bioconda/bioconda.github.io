:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mavenn'
.. highlight: bash

mavenn
======

.. conda:recipe:: mavenn
   :replaces_section_title:
   :noindex:

   MAVE\-NN\: genotype\-phenotype maps from multiplex assays of variant effect

   :homepage: http://mavenn.readthedocs.io
   :developer docs: http://github.com/jbkinney/mavenn
   :license: MIT / MIT
   :recipe: /`mavenn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mavenn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mavenn/meta.yaml>`_

   


.. conda:package:: mavenn

   |downloads_mavenn| |docker_mavenn|

   :versions:
      
      

      ``1.0.2-0``,  ``1.0.0-0``,  ``0.99-0``,  ``0.25-0``,  ``0.24-0``,  ``0.23-1``,  ``0.23-0``

      

   
   :depends logomaker: ``>=0.8``
   :depends matplotlib-base: ``>=3.2.0``
   :depends numpy: 
   :depends pandas: ``>=1.1.2``
   :depends python: ``>=3``
   :depends scikit-learn: ``>=0.22``
   :depends tensorflow: ``>=2.3.0``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install mavenn

   and update with::

      mamba update mavenn

  To create a new environment, run::

      mamba create --name myenvname mavenn

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mavenn:<tag>

   (see `mavenn/tags`_ for valid values for ``<tag>``)


.. |downloads_mavenn| image:: https://img.shields.io/conda/dn/bioconda/mavenn.svg?style=flat
   :target: https://anaconda.org/bioconda/mavenn
   :alt:   (downloads)
.. |docker_mavenn| image:: https://quay.io/repository/biocontainers/mavenn/status
   :target: https://quay.io/repository/biocontainers/mavenn
.. _`mavenn/tags`: https://quay.io/repository/biocontainers/mavenn?tab=tags


.. raw:: html

    <script>
        var package = "mavenn";
        var versions = ["1.0.2","1.0.0","0.99","0.25","0.24"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mavenn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mavenn/README.html