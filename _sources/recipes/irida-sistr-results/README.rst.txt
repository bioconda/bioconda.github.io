:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'irida-sistr-results'
.. highlight: bash

irida-sistr-results
===================

.. conda:recipe:: irida-sistr-results
   :replaces_section_title:
   :noindex:

   Exports SISTR results available through IRIDA into a single report.

   :homepage: https://github.com/phac-nml/irida-sistr-results
   :license: APACHE / Apache Software License
   :recipe: /`irida-sistr-results <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/irida-sistr-results>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/irida-sistr-results/meta.yaml>`_

   The IRIDA SISTR Results application enables the export of SISTR
   results that were run through IRIDA \(via the sistr\-cmd application\)
   to a spreadsheet


.. conda:package:: irida-sistr-results

   |downloads_irida-sistr-results| |docker_irida-sistr-results|

   :versions:
      
      

      ``0.6.0-1``,  ``0.6.0-0``,  ``0.5.0-0``,  ``0.4.0-2``,  ``0.4.0-0``,  ``0.3.1-0``

      

   
   :depends on appdirs: ``>=1.4.3``
   :depends on pandas: ``>=0.23.0``
   :depends on python: ``>=3``
   :depends on rauth: ``>=0.7.3``
   :depends on urllib3: ``>=1.21.1``
   :depends on xlsxwriter: ``>=0.9.8``

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

    pixi global install irida-sistr-results

to add into an existing workspace instead, run::

    pixi add irida-sistr-results

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install irida-sistr-results

Alternatively, to install into a new environment, run::

    conda create -n envname irida-sistr-results

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/irida-sistr-results:<tag>

(see `irida-sistr-results/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_irida-sistr-results| image:: https://img.shields.io/conda/dn/bioconda/irida-sistr-results.svg?style=flat
   :target: https://anaconda.org/bioconda/irida-sistr-results
   :alt:   (downloads)
.. |docker_irida-sistr-results| image:: https://quay.io/repository/biocontainers/irida-sistr-results/status
   :target: https://quay.io/repository/biocontainers/irida-sistr-results
.. _`irida-sistr-results/tags`: https://quay.io/repository/biocontainers/irida-sistr-results?tab=tags


.. raw:: html

    <script>
        var package = "irida-sistr-results";
        var versions = ["0.6.0","0.6.0","0.5.0","0.4.0","0.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/irida-sistr-results/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/irida-sistr-results/README.html