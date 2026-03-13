:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cami-opal'
.. highlight: bash

cami-opal
=========

.. conda:recipe:: cami-opal
   :replaces_section_title:
   :noindex:

   OPAL assesses and compares the performance of taxonomic metagenome profilers.

   :homepage: http://cami-challenge.org
   :developer docs: https://github.com/CAMI-challenge/OPAL
   :license: Apache-2.0
   :recipe: /`cami-opal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cami-opal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cami-opal/meta.yaml>`_

   


.. conda:package:: cami-opal

   |downloads_cami-opal| |docker_cami-opal|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.13-0</code>,  <code>1.0.12-1</code>,  <code>1.0.12-0</code>,  <code>1.0.11-0</code>,  <code>1.0.10-0</code>,  <code>1.0.9-1</code>,  <code>1.0.9-0</code>,  <code>1.0.8.post0-0</code>,  <code>1.0.5-2</code>,  </span></summary>
      

      ``1.0.13-0``,  ``1.0.12-1``,  ``1.0.12-0``,  ``1.0.11-0``,  ``1.0.10-0``,  ``1.0.9-1``,  ``1.0.9-0``,  ``1.0.8.post0-0``,  ``1.0.5-2``,  ``1.0.5-0``,  ``1.0.2-1``,  ``1.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bokeh: ``3.1.0``
   :depends on dendropy: ``>=4.4.0``
   :depends on docker-py: ``>=6.1.2``
   :depends on h5py: ``>=2.9.0``
   :depends on jinja2: ``>=3.1.2``
   :depends on markupsafe: ``<2.1``
   :depends on matplotlib-base: ``>=3.7.1``
   :depends on numpy: ``>=1.24.2``
   :depends on pandas: ``>=1.5.3``
   :depends on python: ``>=3.6``
   :depends on scikit-bio: ``>=0.5.5``
   :depends on scipy: ``>=1.10.1``
   :depends on seaborn: ``>=0.12.2``

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

    pixi global install cami-opal

to add into an existing workspace instead, run::

    pixi add cami-opal

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cami-opal

Alternatively, to install into a new environment, run::

    conda create -n envname cami-opal

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cami-opal:<tag>

(see `cami-opal/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cami-opal| image:: https://img.shields.io/conda/dn/bioconda/cami-opal.svg?style=flat
   :target: https://anaconda.org/bioconda/cami-opal
   :alt:   (downloads)
.. |docker_cami-opal| image:: https://quay.io/repository/biocontainers/cami-opal/status
   :target: https://quay.io/repository/biocontainers/cami-opal
.. _`cami-opal/tags`: https://quay.io/repository/biocontainers/cami-opal?tab=tags


.. raw:: html

    <script>
        var package = "cami-opal";
        var versions = ["1.0.13","1.0.12","1.0.12","1.0.11","1.0.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cami-opal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cami-opal/README.html