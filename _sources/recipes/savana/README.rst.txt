:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'savana'
.. highlight: bash

savana
======

.. conda:recipe:: savana
   :replaces_section_title:
   :noindex:

   SAVANA\: a somatic structural variant caller for long\-read data.

   :homepage: https://github.com/cortes-ciriano-lab/savana
   :license: APACHE / Apache-2.0
   :recipe: /`savana <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/savana>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/savana/meta.yaml>`_

   


.. conda:package:: savana

   |downloads_savana| |docker_savana|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.7-0</code>,  <code>1.3.6-0</code>,  <code>1.3.5-0</code>,  <code>1.3.4-0</code>,  <code>1.3.3-0</code>,  <code>1.3.1-0</code>,  <code>1.3.0-0</code>,  <code>1.2.5-0</code>,  <code>1.2.4-0</code>,  </span></summary>
      

      ``1.3.7-0``,  ``1.3.6-0``,  ``1.3.5-0``,  ``1.3.4-0``,  ``1.3.3-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.5-0``,  ``1.2.4-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.0-0``,  ``0.2.3-0``,  ``0.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on cyvcf2: ``>=0.30.16``
   :depends on matplotlib-base: ``>=3.7.1``
   :depends on pandas: ``>=2.0.0``
   :depends on pybedtools: ``>=0.9.0``
   :depends on pysam: ``>=0.20.0``
   :depends on python: ``>=3.9``
   :depends on scikit-learn: ``1.2.2.*``

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

    pixi global install savana

to add into an existing workspace instead, run::

    pixi add savana

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install savana

Alternatively, to install into a new environment, run::

    conda create -n envname savana

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/savana:<tag>

(see `savana/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_savana| image:: https://img.shields.io/conda/dn/bioconda/savana.svg?style=flat
   :target: https://anaconda.org/bioconda/savana
   :alt:   (downloads)
.. |docker_savana| image:: https://quay.io/repository/biocontainers/savana/status
   :target: https://quay.io/repository/biocontainers/savana
.. _`savana/tags`: https://quay.io/repository/biocontainers/savana?tab=tags


.. raw:: html

    <script>
        var package = "savana";
        var versions = ["1.3.7","1.3.6","1.3.5","1.3.4","1.3.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/savana/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/savana/README.html