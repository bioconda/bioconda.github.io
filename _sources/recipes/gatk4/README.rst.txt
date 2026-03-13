:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gatk4'
.. highlight: bash

gatk4
=====

.. conda:recipe:: gatk4
   :replaces_section_title:
   :noindex:

   Genome Analysis Toolkit \(GATK4\)

   :homepage: https://www.broadinstitute.org/gatk/
   :developer docs: https://github.com/broadinstitute/gatk
   :license: BSD / BSD-3-Clause
   :recipe: /`gatk4 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gatk4>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gatk4/meta.yaml>`_

   


.. conda:package:: gatk4

   |downloads_gatk4| |docker_gatk4|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.6.2.0-1</code>,  <code>4.6.2.0-0</code>,  <code>4.6.1.0-0</code>,  <code>4.5.0.0-0</code>,  <code>4.4.0.0-0</code>,  <code>4.3.0.0-0</code>,  <code>4.2.6.1-1</code>,  <code>4.2.6.1-0</code>,  <code>4.2.6.0-0</code>,  </span></summary>
      

      ``4.6.2.0-1``,  ``4.6.2.0-0``,  ``4.6.1.0-0``,  ``4.5.0.0-0``,  ``4.4.0.0-0``,  ``4.3.0.0-0``,  ``4.2.6.1-1``,  ``4.2.6.1-0``,  ``4.2.6.0-0``,  ``4.2.5.0-0``,  ``4.2.4.1-0``,  ``4.2.4.0-0``,  ``4.2.3.0-1``,  ``4.2.3.0-0``,  ``4.2.2.0-1``,  ``4.2.2.0-0``,  ``4.2.1.0-0``,  ``4.2.0.0-1``,  ``4.2.0.0-0``,  ``4.1.9.0-0``,  ``4.1.8.1-0``,  ``4.1.8.0-0``,  ``4.1.7.0-0``,  ``4.1.6.0-0``,  ``4.1.5.0-1``,  ``4.1.5.0-0``,  ``4.1.4.1-1``,  ``4.1.4.1-0``,  ``4.1.4.0-1``,  ``4.1.4.0-0``,  ``4.1.3.0-0``,  ``4.1.2.0-1``,  ``4.1.2.0-0``,  ``4.1.1.0-0``,  ``4.1.0.0-0``,  ``4.0.12.0-0``,  ``4.0.11.0-0``,  ``4.0.10.0-0``,  ``4.0.9.0-0``,  ``4.0.8.1-0``,  ``4.0.7.0-0``,  ``4.0.6.0-0``,  ``4.0.5.2-0``,  ``4.0.5.1-0``,  ``4.0.4.0-0``,  ``4.0.3.0-1``,  ``4.0.3.0-0``,  ``4.0.2.1-0``,  ``4.0.2.0-0``,  ``4.0.1.2-0``,  ``4.0.1.1-0``,  ``4.0.1.0-0``,  ``4.0.0.0-0``,  ``4.0b6-0``,  ``4.0b5-0``,  ``4.0b4-0``,  ``4.0b3-0``,  ``4.0b2-0``,  ``4.0b1-0``,  ``4.0a1.2.7.2-2``

      
      .. raw:: html

         </details>
      

   
   :depends on openjdk: ``>=17``
   :depends on python: ``>=3.10,<3.11.0a0``

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

    pixi global install gatk4

to add into an existing workspace instead, run::

    pixi add gatk4

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gatk4

Alternatively, to install into a new environment, run::

    conda create -n envname gatk4

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gatk4:<tag>

(see `gatk4/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gatk4| image:: https://img.shields.io/conda/dn/bioconda/gatk4.svg?style=flat
   :target: https://anaconda.org/bioconda/gatk4
   :alt:   (downloads)
.. |docker_gatk4| image:: https://quay.io/repository/biocontainers/gatk4/status
   :target: https://quay.io/repository/biocontainers/gatk4
.. _`gatk4/tags`: https://quay.io/repository/biocontainers/gatk4?tab=tags


.. raw:: html

    <script>
        var package = "gatk4";
        var versions = ["4.6.2.0","4.6.2.0","4.6.1.0","4.5.0.0","4.4.0.0"];
    </script>


.. conda:package:: gatk4-spark

   |downloads_gatk4-spark| |docker_gatk4-spark|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.6.2.0-1</code>,  <code>4.6.2.0-0</code>,  <code>4.6.1.0-0</code>,  <code>4.5.0.0-0</code>,  <code>4.4.0.0-0</code>,  <code>4.3.0.0-0</code>,  <code>4.2.6.1-1</code>,  <code>4.2.6.1-0</code>,  <code>4.2.6.0-0</code>,  </span></summary>
      

      ``4.6.2.0-1``,  ``4.6.2.0-0``,  ``4.6.1.0-0``,  ``4.5.0.0-0``,  ``4.4.0.0-0``,  ``4.3.0.0-0``,  ``4.2.6.1-1``,  ``4.2.6.1-0``,  ``4.2.6.0-0``,  ``4.2.5.0-0``,  ``4.2.4.1-0``,  ``4.2.4.0-0``,  ``4.2.3.0-1``,  ``4.2.3.0-0``,  ``4.2.2.0-1``,  ``4.2.2.0-0``,  ``4.2.1.0-0``,  ``4.2.0.0-1``,  ``4.2.0.0-0``,  ``4.1.9.0-0``,  ``4.1.8.1-0``,  ``4.1.8.0-0``,  ``4.1.7.0-0``,  ``4.1.6.0-0``,  ``4.1.5.0-1``,  ``4.1.5.0-0``,  ``4.1.4.1-1``,  ``4.1.4.1-0``,  ``4.1.4.0-1``,  ``4.1.4.0-0``,  ``4.1.3.0-0``,  ``4.1.2.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends on gatk4: ``4.6.2.0 py310hdfd78af_1``
   :depends on openjdk: ``>=17``
   :depends on python: 

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

    pixi global install gatk4-spark

to add into an existing workspace instead, run::

    pixi add gatk4-spark

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gatk4-spark

Alternatively, to install into a new environment, run::

    conda create -n envname gatk4-spark

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gatk4-spark:<tag>

(see `gatk4-spark/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gatk4-spark| image:: https://img.shields.io/conda/dn/bioconda/gatk4-spark.svg?style=flat
   :target: https://anaconda.org/bioconda/gatk4-spark
   :alt:   (downloads)
.. |docker_gatk4-spark| image:: https://quay.io/repository/biocontainers/gatk4/status
   :target: https://quay.io/repository/biocontainers/gatk4
.. _`gatk4-spark/tags`: https://quay.io/repository/biocontainers/gatk4-spark?tab=tags


.. raw:: html

    <script>
        var package = "gatk4";
        var versions = ["4.6.2.0","4.6.2.0","4.6.1.0","4.5.0.0","4.4.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gatk4/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gatk4/README.html