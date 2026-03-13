:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'crispector'
.. highlight: bash

crispector
==========

.. conda:recipe:: crispector
   :replaces_section_title:
   :noindex:

   Accurate estimation of off\-target editing activity from comparative NGS data

   :homepage: https://github.com/YakhiniGroup/crispector
   :license: free to academic and non-for-profit research work, non-commercial use, see LICENSE file
   :recipe: /`crispector <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crispector>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crispector/meta.yaml>`_

   


.. conda:package:: crispector

   |downloads_crispector| |docker_crispector|

   :versions:
      
      

      ``1.0.7-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2b9-0``,  ``1.0.2b7-0``,  ``1.0.2b6-0``

      

   
   :depends on biopython: ``>=1.74``
   :depends on click: ``>=7.0``
   :depends on fastp: 
   :depends on jinja2: 
   :depends on matplotlib-base: ``>=3.1.2``
   :depends on mpmath: ``>=1.3.0``
   :depends on numpy: ``>=1.12.1``
   :depends on pandas: ``>=0.24.2``
   :depends on plotly: ``>=4.3.0``
   :depends on python: ``3.7.*``
   :depends on python-edlib: 
   :depends on pyyaml: ``>=5.1.2``
   :depends on scipy: ``>=1.2.1``
   :depends on seaborn: ``>=0.9.0``
   :depends on statsmodels: 

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

    pixi global install crispector

to add into an existing workspace instead, run::

    pixi add crispector

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install crispector

Alternatively, to install into a new environment, run::

    conda create -n envname crispector

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/crispector:<tag>

(see `crispector/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_crispector| image:: https://img.shields.io/conda/dn/bioconda/crispector.svg?style=flat
   :target: https://anaconda.org/bioconda/crispector
   :alt:   (downloads)
.. |docker_crispector| image:: https://quay.io/repository/biocontainers/crispector/status
   :target: https://quay.io/repository/biocontainers/crispector
.. _`crispector/tags`: https://quay.io/repository/biocontainers/crispector?tab=tags


.. raw:: html

    <script>
        var package = "crispector";
        var versions = ["1.0.7","1.0.4","1.0.3","1.0.2b9","1.0.2b7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/crispector/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/crispector/README.html