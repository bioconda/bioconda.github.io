:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mercat2'
.. highlight: bash

mercat2
=======

.. conda:recipe:: mercat2
   :replaces_section_title:
   :noindex:

   versatile k\-mer counter and diversity estimator for database independent property analysis \(DIPA\) for multi\-omic analysis

   :homepage: https://github.com/raw-lab/mercat2
   :license: BSD / BSD-3-Clause
   :recipe: /`mercat2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mercat2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mercat2/meta.yaml>`_

   


.. conda:package:: mercat2

   |downloads_mercat2| |docker_mercat2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.1-0</code>,  <code>1.4.0-0</code>,  <code>1.3-0</code>,  <code>1.2-0</code>,  <code>1.1-0</code>,  <code>1.0-1</code>,  <code>1.0-0</code>,  <code>0.2-1</code>,  <code>0.2-0</code>,  </span></summary>
      

      ``1.4.1-0``,  ``1.4.0-0``,  ``1.3-0``,  ``1.2-0``,  ``1.1-0``,  ``1.0-1``,  ``1.0-0``,  ``0.2-1``,  ``0.2-0``,  ``0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on configargparse: 
   :depends on dominate: 
   :depends on fastp: 
   :depends on fastqc: 
   :depends on grpcio: ``1.43``
   :depends on humanize: 
   :depends on metaomestats: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on plotly: 
   :depends on prodigal: 
   :depends on psutil: 
   :depends on python: ``>=3.9``
   :depends on python-kaleido: 
   :depends on ray-core: 
   :depends on ray-dashboard: 
   :depends on ray-default: 
   :depends on ray-tune: 
   :depends on scikit-bio: ``0.5.7``
   :depends on scikit-learn: 
   :depends on scipy: ``1.8.1``

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

    pixi global install mercat2

to add into an existing workspace instead, run::

    pixi add mercat2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mercat2

Alternatively, to install into a new environment, run::

    conda create -n envname mercat2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mercat2:<tag>

(see `mercat2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mercat2| image:: https://img.shields.io/conda/dn/bioconda/mercat2.svg?style=flat
   :target: https://anaconda.org/bioconda/mercat2
   :alt:   (downloads)
.. |docker_mercat2| image:: https://quay.io/repository/biocontainers/mercat2/status
   :target: https://quay.io/repository/biocontainers/mercat2
.. _`mercat2/tags`: https://quay.io/repository/biocontainers/mercat2?tab=tags


.. raw:: html

    <script>
        var package = "mercat2";
        var versions = ["1.4.1","1.4.0","1.3","1.2","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mercat2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mercat2/README.html