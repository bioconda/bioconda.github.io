:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ms2rescore'
.. highlight: bash

ms2rescore
==========

.. conda:recipe:: ms2rescore
   :replaces_section_title:
   :noindex:

   Modular and user\-friendly platform for AI\-assisted rescoring of peptide identifications.

   :homepage: https://github.com/compomics/ms2rescore
   :documentation: https://ms2rescore.readthedocs.io/en/stable
   
   :license: APACHE / Apache-2.0
   :recipe: /`ms2rescore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ms2rescore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ms2rescore/meta.yaml>`_

   


.. conda:package:: ms2rescore

   |downloads_ms2rescore| |docker_ms2rescore|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.2.1-0</code>,  <code>3.2.0.post1-0</code>,  <code>3.1.5-1</code>,  <code>3.1.5-0</code>,  <code>3.1.4-0</code>,  <code>3.0.3-0</code>,  <code>3.0.2-0</code>,  <code>3.0.1-2</code>,  <code>3.0.1-1</code>,  </span></summary>
      

      ``3.2.1-0``,  ``3.2.0.post1-0``,  ``3.1.5-1``,  ``3.1.5-0``,  ``3.1.4-0``,  ``3.0.3-0``,  ``3.0.2-0``,  ``3.0.1-2``,  ``3.0.1-1``,  ``3.0.1-0``,  ``3.0.0-0``,  ``3.0.0b1-1``,  ``3.0.0b1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on cascade-config: ``>=0.4.0``
   :depends on click: ``>=7``
   :depends on customtkinter: ``>=5,<6``
   :depends on deeplc: ``>=3.1``
   :depends on deeplcretrainer: 
   :depends on im2deep: ``>=0.3.1``
   :depends on jinja2: ``>=3``
   :depends on lxml: ``>=4.5``
   :depends on mokapot: ``0.10``
   :depends on ms2pip: ``>=4.0``
   :depends on ms2rescore-rs: ``>=0.4.3``
   :depends on numpy: ``>=1.25``
   :depends on pandas: ``>=1``
   :depends on plotly: ``>=5``
   :depends on psm-utils: ``>=1.1``
   :depends on pyopenms: ``>=3.0``
   :depends on pyteomics: ``>=4.7.2``
   :depends on python: ``>=3.10``
   :depends on rich: ``>=12``
   :depends on sqlalchemy: ``>=2``

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

    pixi global install ms2rescore

to add into an existing workspace instead, run::

    pixi add ms2rescore

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ms2rescore

Alternatively, to install into a new environment, run::

    conda create -n envname ms2rescore

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ms2rescore:<tag>

(see `ms2rescore/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ms2rescore| image:: https://img.shields.io/conda/dn/bioconda/ms2rescore.svg?style=flat
   :target: https://anaconda.org/bioconda/ms2rescore
   :alt:   (downloads)
.. |docker_ms2rescore| image:: https://quay.io/repository/biocontainers/ms2rescore/status
   :target: https://quay.io/repository/biocontainers/ms2rescore
.. _`ms2rescore/tags`: https://quay.io/repository/biocontainers/ms2rescore?tab=tags


.. raw:: html

    <script>
        var package = "ms2rescore";
        var versions = ["3.2.1","3.2.0.post1","3.1.5","3.1.5","3.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ms2rescore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ms2rescore/README.html