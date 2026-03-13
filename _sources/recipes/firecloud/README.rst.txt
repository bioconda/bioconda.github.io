:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'firecloud'
.. highlight: bash

firecloud
=========

.. conda:recipe:: firecloud
   :replaces_section_title:
   :noindex:

   API and CLI for Broad Institute\'s Firecloud workspace\/workflow management service.

   :homepage: https://github.com/broadinstitute/fiss
   :documentation: https://software.broadinstitute.org/firecloud
   
   :license: BSD / BSD-3-Clause
   :recipe: /`firecloud <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/firecloud>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/firecloud/meta.yaml>`_

   


.. conda:package:: firecloud

   |downloads_firecloud| |docker_firecloud|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.16.38-0</code>,  <code>0.16.37-0</code>,  <code>0.16.35-0</code>,  <code>0.16.31-0</code>,  <code>0.16.30-0</code>,  <code>0.16.28-0</code>,  <code>0.16.27-1</code>,  <code>0.16.27-0</code>,  <code>0.16.26-1</code>,  </span></summary>
      

      ``0.16.38-0``,  ``0.16.37-0``,  ``0.16.35-0``,  ``0.16.31-0``,  ``0.16.30-0``,  ``0.16.28-0``,  ``0.16.27-1``,  ``0.16.27-0``,  ``0.16.26-1``,  ``0.16.26-0``,  ``0.16.25-0``,  ``0.16.20-0``

      
      .. raw:: html

         </details>
      

   
   :depends on google-auth: ``>=1.6.3``
   :depends on google-cloud-storage: 
   :depends on nose: 
   :depends on pydot: 
   :depends on pylint: ``>=1.9.5``
   :depends on python: ``<3.12``
   :depends on requests: 
   :depends on six: 

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

    pixi global install firecloud

to add into an existing workspace instead, run::

    pixi add firecloud

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install firecloud

Alternatively, to install into a new environment, run::

    conda create -n envname firecloud

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/firecloud:<tag>

(see `firecloud/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_firecloud| image:: https://img.shields.io/conda/dn/bioconda/firecloud.svg?style=flat
   :target: https://anaconda.org/bioconda/firecloud
   :alt:   (downloads)
.. |docker_firecloud| image:: https://quay.io/repository/biocontainers/firecloud/status
   :target: https://quay.io/repository/biocontainers/firecloud
.. _`firecloud/tags`: https://quay.io/repository/biocontainers/firecloud?tab=tags


.. raw:: html

    <script>
        var package = "firecloud";
        var versions = ["0.16.38","0.16.37","0.16.35","0.16.31","0.16.30"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/firecloud/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/firecloud/README.html