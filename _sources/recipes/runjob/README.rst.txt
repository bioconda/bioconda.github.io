:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'runjob'
.. highlight: bash

runjob
======

.. conda:recipe:: runjob
   :replaces_section_title:
   :noindex:

   Manage jobs or pipeline of bioinfomation.

   :homepage: https://github.com/yodeng/runjob
   :documentation: https://runjob.readthedocs.io/en/latest
   
   :license: MIT / MIT
   :recipe: /`runjob <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/runjob>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/runjob/meta.yaml>`_

   Runjob is a program for managing a group of related bioinformatic jobs or pipelines running on a compute cluster.


.. conda:package:: runjob

   |downloads_runjob| |docker_runjob|

   :versions:
      
      

      ``2.10.9-0``,  ``2.10.6-0``,  ``2.10.5-0``,  ``2.10.4-0``,  ``2.10.3-0``,  ``2.10.2-0``

      

   
   :depends on configparser: ``>=5.0.2``
   :depends on prettytable: ``>=3.2.0``
   :depends on psutil: ``>=5.7.0``
   :depends on python: ``>=3.5``
   :depends on ratelimiter: ``>=1.2.0``

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

    pixi global install runjob

to add into an existing workspace instead, run::

    pixi add runjob

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install runjob

Alternatively, to install into a new environment, run::

    conda create -n envname runjob

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/runjob:<tag>

(see `runjob/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_runjob| image:: https://img.shields.io/conda/dn/bioconda/runjob.svg?style=flat
   :target: https://anaconda.org/bioconda/runjob
   :alt:   (downloads)
.. |docker_runjob| image:: https://quay.io/repository/biocontainers/runjob/status
   :target: https://quay.io/repository/biocontainers/runjob
.. _`runjob/tags`: https://quay.io/repository/biocontainers/runjob?tab=tags


.. raw:: html

    <script>
        var package = "runjob";
        var versions = ["2.10.9","2.10.6","2.10.5","2.10.4","2.10.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/runjob/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/runjob/README.html