:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyensembl'
.. highlight: bash

pyensembl
=========

.. conda:recipe:: pyensembl
   :replaces_section_title:
   :noindex:

   Python interface to ensembl reference genome metadata

   :homepage: https://github.com/openvax/pyensembl
   :license: Apache / Apache-2.0
   :recipe: /`pyensembl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyensembl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyensembl/meta.yaml>`_

   


.. conda:package:: pyensembl

   |downloads_pyensembl| |docker_pyensembl|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.3.9-0</code>,  <code>2.3.6-0</code>,  <code>2.3.4-0</code>,  <code>2.3.0-0</code>,  <code>2.2.9-0</code>,  <code>2.1.0-0</code>,  <code>2.0.1-0</code>,  <code>2.0.0-0</code>,  <code>1.9.4-0</code>,  </span></summary>
      

      ``2.3.9-0``,  ``2.3.6-0``,  ``2.3.4-0``,  ``2.3.0-0``,  ``2.2.9-0``,  ``2.1.0-0``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.9.4-0``,  ``1.9.2-0``,  ``1.9.1-0``,  ``1.9.0-0``,  ``1.8.8-0``,  ``1.8.7-1``,  ``1.8.7-0``,  ``1.8.5-0``,  ``1.8.4-1``,  ``1.8.4-0``,  ``1.8.3-0``,  ``1.8.2-0``,  ``1.8.0-0``,  ``1.7.5-0``,  ``1.7.4-0``,  ``1.7.3-1``,  ``1.7.3-0``,  ``1.7.2-0``,  ``1.2.6-2``,  ``1.2.6-1``,  ``1.2.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends datacache: ``>=1.1.4``
   :depends gtfparse: ``>=1.3.0``
   :depends memoized-property: ``>=1.0.2``
   :depends numpy: ``>=1.7``
   :depends pandas: ``>=0.15``
   :depends pylint: ``>=1.4.4``
   :depends python: 
   :depends python-dateutil: ``>=2.5.0``
   :depends serializable: 
   :depends six: ``>=1.9.0``
   :depends tinytimer: 
   :depends typechecks: ``>=0.0.2``
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

      mamba install pyensembl

   and update with::

      mamba update pyensembl

  To create a new environment, run::

      mamba create --name myenvname pyensembl

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pyensembl:<tag>

   (see `pyensembl/tags`_ for valid values for ``<tag>``)


.. |downloads_pyensembl| image:: https://img.shields.io/conda/dn/bioconda/pyensembl.svg?style=flat
   :target: https://anaconda.org/bioconda/pyensembl
   :alt:   (downloads)
.. |docker_pyensembl| image:: https://quay.io/repository/biocontainers/pyensembl/status
   :target: https://quay.io/repository/biocontainers/pyensembl
.. _`pyensembl/tags`: https://quay.io/repository/biocontainers/pyensembl?tab=tags


.. raw:: html

    <script>
        var package = "pyensembl";
        var versions = ["2.3.9","2.3.6","2.3.4","2.3.0","2.2.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyensembl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyensembl/README.html