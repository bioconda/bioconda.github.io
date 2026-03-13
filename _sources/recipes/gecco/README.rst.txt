:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gecco'
.. highlight: bash

gecco
=====

.. conda:recipe:: gecco
   :replaces_section_title:
   :noindex:

   Gene Cluster prediction with Conditional Random Fields.

   :homepage: https://gecco.embl.de/
   :license: GPL / GPL-3.0-or-later
   :recipe: /`gecco <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gecco>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gecco/meta.yaml>`_
   :links: doi: :doi:`10.1101/2021.05.03.442509`

   


.. conda:package:: gecco

   |downloads_gecco| |docker_gecco|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.10.3-0</code>,  <code>0.10.2-0</code>,  <code>0.10.1-0</code>,  <code>0.10.0-0</code>,  <code>0.9.10-0</code>,  <code>0.9.8-0</code>,  <code>0.9.6-0</code>,  <code>0.9.5-0</code>,  <code>0.9.2-0</code>,  </span></summary>
      

      ``0.10.3-0``,  ``0.10.2-0``,  ``0.10.1-0``,  ``0.10.0-0``,  ``0.9.10-0``,  ``0.9.8-0``,  ``0.9.6-0``,  ``0.9.5-0``,  ``0.9.2-0``,  ``0.9.1-0``,  ``0.8.10-0``,  ``0.8.9-0``,  ``0.8.8-0``,  ``0.8.7-0``,  ``0.8.6-0``,  ``0.8.5-0``,  ``0.8.4-0``,  ``0.8.0-0``,  ``0.7.0-0``,  ``0.6.3-0``,  ``0.6.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: ``>=1.73,<2.0``
   :depends on importlib_metadata: ``>=4.0``
   :depends on importlib_resources: ``>=5.7``
   :depends on numpy: ``>=1.0,<3.0``
   :depends on polars: ``>=1.0,<2.0``
   :depends on pyhmmer: ``>=0.11.0,<0.12.0``
   :depends on pyrodigal: ``>=3.0,<4.0``
   :depends on python: ``>=3.7``
   :depends on rich: ``>=12.4.0``
   :depends on rich-argparse: ``>=1.0,<2.0``
   :depends on scikit-learn: ``>=1.0,<2.0``
   :depends on scipy: ``>=1.4,<2.0``
   :depends on sklearn-crfsuite: ``>=0.5.0,<0.6.0``
   :depends on statsmodels: ``>=0.13,<0.15``

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install gecco

to add into an existing workspace instead, run::

    pixi add gecco

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gecco

Alternatively, to install into a new environment, run::

    conda create -n envname gecco

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gecco:<tag>

(see `gecco/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gecco| image:: https://img.shields.io/conda/dn/bioconda/gecco.svg?style=flat
   :target: https://anaconda.org/bioconda/gecco
   :alt:   (downloads)
.. |docker_gecco| image:: https://quay.io/repository/biocontainers/gecco/status
   :target: https://quay.io/repository/biocontainers/gecco
.. _`gecco/tags`: https://quay.io/repository/biocontainers/gecco?tab=tags


.. raw:: html

    <script>
        var package = "gecco";
        var versions = ["0.10.3","0.10.2","0.10.1","0.10.0","0.9.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gecco/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gecco/README.html