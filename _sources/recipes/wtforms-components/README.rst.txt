:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'wtforms-components'
.. highlight: bash

wtforms-components
==================

.. conda:recipe:: wtforms-components
   :replaces_section_title:
   :noindex:

   Additional fields\, validators and widgets for WTForms.

   :homepage: https://github.com/kvesteri/wtforms-components
   :license: BSD License
   :recipe: /`wtforms-components <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wtforms-components>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wtforms-components/meta.yaml>`_

   


.. conda:package:: wtforms-components

   |downloads_wtforms-components| |docker_wtforms-components|

   :versions:
      
      

      ``0.10.0-2``,  ``0.10.0-0``

      

   
   :depends intervals: ``>=0.6.0``
   :depends phonenumbers: 
   :depends python: 
   :depends six: ``>=1.4.1``
   :depends validators: ``>=0.5.0``
   :depends wtforms: ``>=1.0.4``
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

      mamba install wtforms-components

   and update with::

      mamba update wtforms-components

  To create a new environment, run::

      mamba create --name myenvname wtforms-components

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/wtforms-components:<tag>

   (see `wtforms-components/tags`_ for valid values for ``<tag>``)


.. |downloads_wtforms-components| image:: https://img.shields.io/conda/dn/bioconda/wtforms-components.svg?style=flat
   :target: https://anaconda.org/bioconda/wtforms-components
   :alt:   (downloads)
.. |docker_wtforms-components| image:: https://quay.io/repository/biocontainers/wtforms-components/status
   :target: https://quay.io/repository/biocontainers/wtforms-components
.. _`wtforms-components/tags`: https://quay.io/repository/biocontainers/wtforms-components?tab=tags


.. raw:: html

    <script>
        var package = "wtforms-components";
        var versions = ["0.10.0","0.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wtforms-components/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wtforms-components/README.html