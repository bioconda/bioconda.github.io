:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'irida-staramr-results'
.. highlight: bash

irida-staramr-results
=====================

.. conda:recipe:: irida-staramr-results
   :replaces_section_title:
   :noindex:

   IRIDA StarAMR Results program enables StarAMR analysis results that were run through IRIDA to be batch downloaded into a collection of spreadsheets using the command line.

   :homepage: https://github.com/phac-nml/irida-staramr-results
   :license: Apache-2.0
   :recipe: /`irida-staramr-results <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/irida-staramr-results>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/irida-staramr-results/meta.yaml>`_

   


.. conda:package:: irida-staramr-results

   |downloads_irida-staramr-results| |docker_irida-staramr-results|

   :versions:
      
      

      ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.0-0``,  ``0.1.2-0``

      

   
   :depends on pandas: 
   :depends on python: ``>=3.8.*``
   :depends on python-dateutil: 
   :depends on pyyaml: 
   :depends on rauth: 
   :depends on requests: 
   :depends on setuptools: 
   :depends on xlsxwriter: 

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

    pixi global install irida-staramr-results

to add into an existing workspace instead, run::

    pixi add irida-staramr-results

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install irida-staramr-results

Alternatively, to install into a new environment, run::

    conda create -n envname irida-staramr-results

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/irida-staramr-results:<tag>

(see `irida-staramr-results/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_irida-staramr-results| image:: https://img.shields.io/conda/dn/bioconda/irida-staramr-results.svg?style=flat
   :target: https://anaconda.org/bioconda/irida-staramr-results
   :alt:   (downloads)
.. |docker_irida-staramr-results| image:: https://quay.io/repository/biocontainers/irida-staramr-results/status
   :target: https://quay.io/repository/biocontainers/irida-staramr-results
.. _`irida-staramr-results/tags`: https://quay.io/repository/biocontainers/irida-staramr-results?tab=tags


.. raw:: html

    <script>
        var package = "irida-staramr-results";
        var versions = ["0.3.1","0.3.0","0.2.0","0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/irida-staramr-results/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/irida-staramr-results/README.html