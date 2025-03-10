:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ga4ghmongo'
.. highlight: bash

ga4ghmongo
==========

.. conda:recipe:: ga4ghmongo
   :replaces_section_title:
   :noindex:

   A document based Variant database inspired by ga4gh Variants schema

   :homepage: https://github.com/Phelimb/ga4gh-mongo
   :license: MIT / MIT
   :recipe: /`ga4ghmongo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ga4ghmongo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ga4ghmongo/meta.yaml>`_

   


.. conda:package:: ga4ghmongo

   |downloads_ga4ghmongo| |docker_ga4ghmongo|

   :versions:
      
      

      ``0.0.1.2-2``,  ``0.0.1.2-1``,  ``0.0.1.2-0``

      

   
   :depends mongoengine: 
   :depends python: 
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

      mamba install ga4ghmongo

   and update with::

      mamba update ga4ghmongo

  To create a new environment, run::

      mamba create --name myenvname ga4ghmongo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ga4ghmongo:<tag>

   (see `ga4ghmongo/tags`_ for valid values for ``<tag>``)


.. |downloads_ga4ghmongo| image:: https://img.shields.io/conda/dn/bioconda/ga4ghmongo.svg?style=flat
   :target: https://anaconda.org/bioconda/ga4ghmongo
   :alt:   (downloads)
.. |docker_ga4ghmongo| image:: https://quay.io/repository/biocontainers/ga4ghmongo/status
   :target: https://quay.io/repository/biocontainers/ga4ghmongo
.. _`ga4ghmongo/tags`: https://quay.io/repository/biocontainers/ga4ghmongo?tab=tags


.. raw:: html

    <script>
        var package = "ga4ghmongo";
        var versions = ["0.0.1.2","0.0.1.2","0.0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ga4ghmongo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ga4ghmongo/README.html