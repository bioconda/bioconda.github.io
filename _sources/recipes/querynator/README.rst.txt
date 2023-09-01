:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'querynator'
.. highlight: bash

querynator
==========

.. conda:recipe:: querynator
   :replaces_section_title:
   :noindex:

   Python package to query cancer variant databases

   :homepage: https://github.com/qbic-pipelines/querynator
   :documentation: https://querynator.readthedocs.io/
   
   :developer docs: https://github.com/qbic-pipelines/querynator/tree/dev
   :license: MIT / MIT
   :recipe: /`querynator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/querynator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/querynator/meta.yaml>`_
   :links: biotools: :biotools:`querynator`

   


.. conda:package:: querynator

   |downloads_querynator| |docker_querynator|

   :versions:
      
      

      ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.1.3-0``

      

   
   :depends civicpy: ``3.0.0.*``
   :depends click: ``>=8.1.3``
   :depends httplib2: 
   :depends matplotlib-base: ``3.6.1.*``
   :depends numpy: ``1.24.3.*``
   :depends pandas: ``1.5.1.*``
   :depends pretty_html_table: ``0.9.16.*``
   :depends pytest: ``>=6.2.4``
   :depends python: 
   :depends pyvcf3: ``>=1.0.3``
   :depends requests: 
   :depends requests-cache: 
   :depends sphinx: ``>=5.3.0``
   :depends sphinx-rtd-theme: 
   :depends upsetplot: ``0.8.0.*``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install querynator

   and update with::

      mamba update querynator

  To create a new environment, run::

      mamba create --name myenvname querynator

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/querynator:<tag>

   (see `querynator/tags`_ for valid values for ``<tag>``)


.. |downloads_querynator| image:: https://img.shields.io/conda/dn/bioconda/querynator.svg?style=flat
   :target: https://anaconda.org/bioconda/querynator
   :alt:   (downloads)
.. |docker_querynator| image:: https://quay.io/repository/biocontainers/querynator/status
   :target: https://quay.io/repository/biocontainers/querynator
.. _`querynator/tags`: https://quay.io/repository/biocontainers/querynator?tab=tags


.. raw:: html

    <script>
        var package = "querynator";
        var versions = ["0.4.1","0.4.0","0.3.3","0.2.2","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/querynator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/querynator/README.html