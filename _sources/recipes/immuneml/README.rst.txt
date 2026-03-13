:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'immuneml'
.. highlight: bash

immuneml
========

.. conda:recipe:: immuneml
   :replaces_section_title:
   :noindex:

   immuneML is a software platform for machine learning analysis of immune receptor repertoires.

   :homepage: https://github.com/uio-bmi/immuneML
   :documentation: https://docs.immuneml.uio.no
   
   :license: AGPL / APGL-3.0-only
   :recipe: /`immuneml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/immuneml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/immuneml/meta.yaml>`_
   :links: biotools: :biotools:`immuneml`, doi: :doi:`10.1038/s42256-021-00413-z`

   


.. conda:package:: immuneml

   |downloads_immuneml| |docker_immuneml|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.0.17-0</code>,  <code>3.0.16-0</code>,  <code>3.0.15-0</code>,  <code>3.0.14-0</code>,  <code>3.0.12-0</code>,  <code>3.0.11-0</code>,  <code>3.0.9-0</code>,  <code>3.0.8-0</code>,  <code>3.0.7-0</code>,  </span></summary>
      

      ``3.0.17-0``,  ``3.0.16-0``,  ``3.0.15-0``,  ``3.0.14-0``,  ``3.0.12-0``,  ``3.0.11-0``,  ``3.0.9-0``,  ``3.0.8-0``,  ``3.0.7-0``,  ``3.0.6-1``,  ``3.0.6-0``,  ``3.0.5-0``,  ``3.0.4-0``,  ``3.0.3-0``,  ``2.2.6-1``,  ``2.2.6-0``,  ``2.2.5-1``,  ``2.2.5-0``,  ``2.2.4-1``,  ``2.2.4-0``,  ``2.2.3-0``,  ``2.2.2-0``,  ``2.2.0-0``,  ``2.1.2-2``,  ``2.1.2-1``,  ``2.1.2-0``,  ``2.1.1-1``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.6-0``,  ``2.0.5-0``,  ``2.0.4-0``,  ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.2.5-0``,  ``1.2.4-0``,  ``1.2.0-0``,  ``1.1.4-0``,  ``1.1.3-1``,  ``1.1.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on airr: ``>=1,<1.4``
   :depends on bionumpy: ``1.0.12``
   :depends on dill: ``>=0.3``
   :depends on editdistance: 
   :depends on gensim: ``>=4``
   :depends on keras: ``>=2.12.0``
   :depends on logomaker: ``>=0.8``
   :depends on matplotlib-base: ``>=3.1``
   :depends on matplotlib-venn: ``>=0.11``
   :depends on npstructures: 
   :depends on numpy: ``<=1.26.4``
   :depends on olga: ``>=1.2.4``
   :depends on pandas: ``>=2.1.0``
   :depends on plotly: ``>=4``
   :depends on psutil: 
   :depends on pystache: 
   :depends on pytest: ``>=4``
   :depends on python: ``>=3.7,<3.12``
   :depends on python-kaleido: 
   :depends on pytorch: ``>=2.* cpu_*``
   :depends on pyyaml: ``>=5.3``
   :depends on regex: 
   :depends on scikit-learn: ``>=0.23``
   :depends on scipy: ``<1.13``
   :depends on tensorflow: ``>=2.12.0``
   :depends on tzlocal: 
   :depends on umap-learn: 

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

    pixi global install immuneml

to add into an existing workspace instead, run::

    pixi add immuneml

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install immuneml

Alternatively, to install into a new environment, run::

    conda create -n envname immuneml

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/immuneml:<tag>

(see `immuneml/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_immuneml| image:: https://img.shields.io/conda/dn/bioconda/immuneml.svg?style=flat
   :target: https://anaconda.org/bioconda/immuneml
   :alt:   (downloads)
.. |docker_immuneml| image:: https://quay.io/repository/biocontainers/immuneml/status
   :target: https://quay.io/repository/biocontainers/immuneml
.. _`immuneml/tags`: https://quay.io/repository/biocontainers/immuneml?tab=tags


.. raw:: html

    <script>
        var package = "immuneml";
        var versions = ["3.0.17","3.0.16","3.0.15","3.0.14","3.0.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/immuneml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/immuneml/README.html